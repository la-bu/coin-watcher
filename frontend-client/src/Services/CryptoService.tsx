import {ClientReadableStream, RpcError} from "grpc-web";
import {CryptoRequest, PriceHistoryResponse} from "../proto/generated/cryptoPrices_pb";

import {CryptoClient} from "../proto/generated/CryptoPricesServiceClientPb";

const CORE_URL = "http://localhost:8080";

class CryptoService {
   private client: CryptoClient;
   private stream: ClientReadableStream<PriceHistoryResponse> | null;

   constructor(client: CryptoClient, stream: ClientReadableStream<PriceHistoryResponse> | null) {
      this.client = client;
      this.stream = stream;
   }

   public static create(): CryptoService {
      const client = new CryptoClient(CORE_URL);
      return new CryptoService(client, null);
   }

   getCurrentPrice(symbol: string): Promise<string> {
      const req = new CryptoRequest();
      req.setSymbol(symbol);
      return new Promise((resolve, reject) => {
         this.client.getCurrentPrice(req, {}, (err: RpcError, response: any) => {
            if (err) {
               console.error("Error while fetching current price:", err);
               reject(err);
            } else {
               resolve(response.getPrice());
            }
         });
      });
   }

   public getPriceHistory(symbol: string, callback: (prices: PriceHistoryResponse) => void): void {
      const req = new CryptoRequest();
      req.setSymbol(symbol);

      this.stream = this.client.getPriceHistory(req, {});
      this.stream.on("data", (response) => {
         callback(response);
      });
      this.stream.on("error", (err) => {
         console.error(err);
      });
   }

   public cancelStream(): void {
      if (this.stream) {
         this.stream.cancel();
         console.log("stream canceled");
      }
   }
}

export default CryptoService.create();
