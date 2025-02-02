package de.novatec.remote;

import de.novatec.util.AnsiColors;
import java.text.DecimalFormat;

public class CryptoPrice {
    public String symbol;
    public Double price;

    @Override
    public String toString() {
        DecimalFormat df = new DecimalFormat("0.00");
        String fmtPrice = df.format(price);

        return String.format(
            "%s %s %s",
            AnsiColors.colorize("$" + symbol.substring(0, symbol.length() - 3), AnsiColors.YELLOW),
            AnsiColors.colorize("is currently worth", AnsiColors.GREY),
            AnsiColors.colorize(fmtPrice + "€", AnsiColors.YELLOW)
        );
    }
}
