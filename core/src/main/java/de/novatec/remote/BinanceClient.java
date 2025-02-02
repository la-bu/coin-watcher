package de.novatec.remote;

import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@RegisterRestClient(configKey = "binance-api")
@Produces(MediaType.APPLICATION_JSON)
public interface BinanceClient {

    @GET
    @Path("/ticker/price")
    Uni<CryptoPrice> getCryptoPrice(@QueryParam("symbol") String symbol);

}
