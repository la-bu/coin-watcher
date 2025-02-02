package de.novatec.grpc;

import de.novatec.CryproPrices.Crypto;
import de.novatec.CryproPrices.CryptoRequest;
import de.novatec.CryproPrices.CurrentPriceResponse;
import de.novatec.CryproPrices.PriceHistoryResponse;
import de.novatec.model.Observer;
import de.novatec.model.Coin;
import de.novatec.remote.BinanceClient;
import de.novatec.remote.BinanceService;
import io.quarkus.grpc.GrpcService;
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.smallrye.mutiny.subscription.MultiEmitter;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import java.util.logging.Logger;

import static java.util.Collections.emptyList;

@GrpcService
public class CryptoPricesService implements Crypto, Observer {


    private static final Logger LOGGER = Logger.getLogger(CryptoPricesService.class.getName());
    private final Map<String, List<AtomicReference<MultiEmitter<PriceHistoryResponse>>>> emitters = new HashMap<>();

    @Inject
    @RestClient
    BinanceClient binanceClient;

    @Inject
    BinanceService binanceService;

    @Override
    public Uni<CurrentPriceResponse> getCurrentPrice(CryptoRequest request) {
        LOGGER.info("Request received: " + request);

        return binanceClient
            .getCryptoPrice(request.getSymbol().toUpperCase() + "EUR")
            .map(response -> CurrentPriceResponse.newBuilder().setPrice(response.price).build());
    }

    @Override
    public Multi<PriceHistoryResponse> getPriceHistory(CryptoRequest request) {
        LOGGER.info("Request received: " + request);
        AtomicReference<MultiEmitter<PriceHistoryResponse>> priceHistoryEmitter = new AtomicReference<>();
        String symbol = request.getSymbol().toUpperCase();

        emitters.computeIfAbsent(symbol, k -> new ArrayList<>()).add(priceHistoryEmitter);
        binanceService.subscribe(this);

        return Multi.createFrom().emitter(em -> {
            priceHistoryEmitter.set((MultiEmitter<PriceHistoryResponse>) em);

            Uni<List<Coin>> historicalData = Coin.listCoinPrices(symbol.toUpperCase());

            historicalData.subscribe().with(listOfCoins -> {
                listOfCoins.forEach(
                    entry ->
                        priceHistoryEmitter.get().emit(PriceHistoryResponse.newBuilder()
                            .setPrice(entry.getPrice())
                            .setSymbol(entry.getSymbol())
                            .setTimestamp(entry.getTimestamp().toString())
                            .build()
                        )
                );
            });
            em.onTermination(() -> {
                binanceService.unsubscribe(this);
                emitters.get(symbol).remove(priceHistoryEmitter);
            });
        });
    }

    @Override
    public void update(PriceHistoryResponse response) {
        List<AtomicReference<MultiEmitter<PriceHistoryResponse>>> matchingEmitters = emitters.getOrDefault(response.getSymbol(), emptyList());
        matchingEmitters.forEach(emitter -> emitter.get().emit(response));
        LOGGER.info("Emitted " + response.getPrice() + " to " + matchingEmitters);
    }
}
