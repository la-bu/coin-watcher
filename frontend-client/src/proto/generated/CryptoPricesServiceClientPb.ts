/**
 * @fileoverview gRPC-Web generated client stub for CryptoPrices
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v4.22.2
// source: cryptoPrices.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cryptoPrices_pb from './cryptoPrices_pb';


export class CryptoClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorgetCurrentPrice = new grpcWeb.MethodDescriptor(
    '/CryptoPrices.Crypto/getCurrentPrice',
    grpcWeb.MethodType.UNARY,
    cryptoPrices_pb.CryptoRequest,
    cryptoPrices_pb.CurrentPriceResponse,
    (request: cryptoPrices_pb.CryptoRequest) => {
      return request.serializeBinary();
    },
    cryptoPrices_pb.CurrentPriceResponse.deserializeBinary
  );

  getCurrentPrice(
    request: cryptoPrices_pb.CryptoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cryptoPrices_pb.CurrentPriceResponse>;

  getCurrentPrice(
    request: cryptoPrices_pb.CryptoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cryptoPrices_pb.CurrentPriceResponse) => void): grpcWeb.ClientReadableStream<cryptoPrices_pb.CurrentPriceResponse>;

  getCurrentPrice(
    request: cryptoPrices_pb.CryptoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cryptoPrices_pb.CurrentPriceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/CryptoPrices.Crypto/getCurrentPrice',
        request,
        metadata || {},
        this.methodDescriptorgetCurrentPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/CryptoPrices.Crypto/getCurrentPrice',
    request,
    metadata || {},
    this.methodDescriptorgetCurrentPrice);
  }

  methodDescriptorgetPriceHistory = new grpcWeb.MethodDescriptor(
    '/CryptoPrices.Crypto/getPriceHistory',
    grpcWeb.MethodType.SERVER_STREAMING,
    cryptoPrices_pb.CryptoRequest,
    cryptoPrices_pb.PriceHistoryResponse,
    (request: cryptoPrices_pb.CryptoRequest) => {
      return request.serializeBinary();
    },
    cryptoPrices_pb.PriceHistoryResponse.deserializeBinary
  );

  getPriceHistory(
    request: cryptoPrices_pb.CryptoRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<cryptoPrices_pb.PriceHistoryResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/CryptoPrices.Crypto/getPriceHistory',
      request,
      metadata || {},
      this.methodDescriptorgetPriceHistory);
  }

}

