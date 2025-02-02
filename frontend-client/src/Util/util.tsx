export const convertDate = (d: string) => {
   const date = new Date(d);
   return date.toLocaleTimeString();
};

export enum Coin {
   BTC = "BTC",
   ETH = "ETH",
   DOGE = "DOGE",
}

export type CoinSymbol = Coin.BTC | Coin.ETH | Coin.DOGE;
