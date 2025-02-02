package de.novatec.remote;


import de.novatec.CryproPrices.PriceHistoryResponse;
import de.novatec.model.Observer;
import de.novatec.model.Coin;
import io.quarkus.scheduler.Scheduled;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Currency;
import java.util.List;
import java.util.logging.Logger;


@ApplicationScoped
public class BinanceService {

    @Inject
    @RestClient
    BinanceClient binanceClient;

    List<Observer> observers = new ArrayList<>();

    private static final Logger LOGGER = Logger.getLogger(BinanceService.class.getName());

    @Scheduled(every = "15S")
    public void executeTimer() {
        persistCoin("BTC");
        persistCoin("ETH");
        persistCoin("DOGE");
    }

    private void persistCoin(String coinIdentifier) {
        String symbol = coinIdentifier + "EUR";
        binanceClient.getCryptoPrice(symbol).subscribe().with(response -> {
            Coin coin = new Coin();
            coin.setSymbol(coinIdentifier);
            coin.setTimestamp(LocalDateTime.now().atZone(ZoneOffset.UTC).withZoneSameInstant(ZoneId.of("Europe/Berlin")).toLocalDateTime());
            coin.setPrice(response.price);
            coin.persist()
                .onItem().transform(entity -> coinIdentifier + " persisted")
                .onFailure().recoverWithItem("Failed to save " + coinIdentifier)
                .subscribe().with(System.out::println);
            notifyListeners(coin);
        });
    }

    public void subscribe(Observer observer) {
        observers.add(observer);
        LOGGER.info("Observer added");
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
        LOGGER.info("Observer removed");
    }

    private void notifyListeners(Coin coin) {
        PriceHistoryResponse response = PriceHistoryResponse.newBuilder()
            .setPrice(coin.getPrice())
            .setSymbol(coin.getSymbol())
            .setTimestamp(coin.getTimestamp().toString())
            .build();
        observers.forEach(observer -> observer.update(response));
    }
}
