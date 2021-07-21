// package: 
// file: config.proto

import * as config_pb from "./config_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConfigServiceGetConfig = {
  readonly methodName: string;
  readonly service: typeof ConfigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof config_pb.GetConfigRequest;
  readonly responseType: typeof config_pb.GetConfigResponse;
};

type ConfigServiceSetConfig = {
  readonly methodName: string;
  readonly service: typeof ConfigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof config_pb.SetConfigRequest;
  readonly responseType: typeof config_pb.SetConfigResponse;
};

type ConfigServiceRestart = {
  readonly methodName: string;
  readonly service: typeof ConfigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof config_pb.RestartRequest;
  readonly responseType: typeof config_pb.RestartResponse;
};

export class ConfigService {
  static readonly serviceName: string;
  static readonly GetConfig: ConfigServiceGetConfig;
  static readonly SetConfig: ConfigServiceSetConfig;
  static readonly Restart: ConfigServiceRestart;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ConfigServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getConfig(
    requestMessage: config_pb.GetConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: config_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: config_pb.GetConfigRequest,
    callback: (error: ServiceError|null, responseMessage: config_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
  setConfig(
    requestMessage: config_pb.SetConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: config_pb.SetConfigResponse|null) => void
  ): UnaryResponse;
  setConfig(
    requestMessage: config_pb.SetConfigRequest,
    callback: (error: ServiceError|null, responseMessage: config_pb.SetConfigResponse|null) => void
  ): UnaryResponse;
  restart(
    requestMessage: config_pb.RestartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: config_pb.RestartResponse|null) => void
  ): UnaryResponse;
  restart(
    requestMessage: config_pb.RestartRequest,
    callback: (error: ServiceError|null, responseMessage: config_pb.RestartResponse|null) => void
  ): UnaryResponse;
}

