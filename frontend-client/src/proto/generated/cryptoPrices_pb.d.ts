import * as jspb from 'google-protobuf'



export class CryptoRequest extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): CryptoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoRequest): CryptoRequest.AsObject;
  static serializeBinaryToWriter(message: CryptoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoRequest;
  static deserializeBinaryFromReader(message: CryptoRequest, reader: jspb.BinaryReader): CryptoRequest;
}

export namespace CryptoRequest {
  export type AsObject = {
    symbol: string,
  }
}

export class CurrentPriceResponse extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): CurrentPriceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentPriceResponse): CurrentPriceResponse.AsObject;
  static serializeBinaryToWriter(message: CurrentPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentPriceResponse;
  static deserializeBinaryFromReader(message: CurrentPriceResponse, reader: jspb.BinaryReader): CurrentPriceResponse;
}

export namespace CurrentPriceResponse {
  export type AsObject = {
    price: number,
  }
}

export class PriceHistoryResponse extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): PriceHistoryResponse;

  getPrice(): number;
  setPrice(value: number): PriceHistoryResponse;

  getTimestamp(): string;
  setTimestamp(value: string): PriceHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PriceHistoryResponse): PriceHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: PriceHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceHistoryResponse;
  static deserializeBinaryFromReader(message: PriceHistoryResponse, reader: jspb.BinaryReader): PriceHistoryResponse;
}

export namespace PriceHistoryResponse {
  export type AsObject = {
    symbol: string,
    price: number,
    timestamp: string,
  }
}

