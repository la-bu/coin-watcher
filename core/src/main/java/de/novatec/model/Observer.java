package de.novatec.model;

import de.novatec.CryproPrices.PriceHistoryResponse;

public interface Observer {

    void update(PriceHistoryResponse response);

}
