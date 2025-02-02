package de.novatec.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import io.quarkus.mongodb.panache.common.MongoEntity;
import io.quarkus.mongodb.panache.reactive.ReactivePanacheMongoEntity;
import io.quarkus.mongodb.panache.reactive.ReactivePanacheMongoEntityBase;
import io.smallrye.mutiny.Uni;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Currency;
import java.util.List;

@MongoEntity(collection = "cryptoDb")
@NoArgsConstructor
@Data
@Getter
@EqualsAndHashCode(callSuper=false)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Coin extends ReactivePanacheMongoEntity {
    private Long _id;
    private String symbol;
    private Double price;
    private LocalDateTime timestamp;

    public static Uni<List<Coin>> listCoinPrices(String symbol) {
        return Coin.list("symbol", symbol);
    }
}
