// package: 
// file: config.proto

import * as jspb from "google-protobuf";

export class AgentConfig extends jspb.Message {
  getWebGrpcEnable(): boolean;
  setWebGrpcEnable(value: boolean): void;

  getWebGrpcPort(): number;
  setWebGrpcPort(value: number): void;

  getMaxMsgSize(): number;
  setMaxMsgSize(value: number): void;

  getGrpcPort(): number;
  setGrpcPort(value: number): void;

  getLogLevel(): number;
  setLogLevel(value: number): void;

  getWebServerPort(): number;
  setWebServerPort(value: number): void;

  getNetworkMode(): string;
  setNetworkMode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AgentConfig): AgentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentConfig;
  static deserializeBinaryFromReader(message: AgentConfig, reader: jspb.BinaryReader): AgentConfig;
}

export namespace AgentConfig {
  export type AsObject = {
    webGrpcEnable: boolean,
    webGrpcPort: number,
    maxMsgSize: number,
    grpcPort: number,
    logLevel: number,
    webServerPort: number,
    networkMode: string,
  }
}

export class ApiConfig extends jspb.Message {
  getBaseUrl(): string;
  setBaseUrl(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  getProxy(): string;
  setProxy(value: string): void;

  getWebsocketEndpoint(): string;
  setWebsocketEndpoint(value: string): void;

  getWebsocketProtocol(): string;
  setWebsocketProtocol(value: string): void;

  getWebsocketPath(): string;
  setWebsocketPath(value: string): void;

  getWebsocketReconnectPeriod(): number;
  setWebsocketReconnectPeriod(value: number): void;

  getWebsocketPingPeriod(): number;
  setWebsocketPingPeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ApiConfig): ApiConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiConfig;
  static deserializeBinaryFromReader(message: ApiConfig, reader: jspb.BinaryReader): ApiConfig;
}

export namespace ApiConfig {
  export type AsObject = {
    baseUrl: string,
    token: string,
    timeout: number,
    proxy: string,
    websocketEndpoint: string,
    websocketProtocol: string,
    websocketPath: string,
    websocketReconnectPeriod: number,
    websocketPingPeriod: number,
  }
}

export class DatabaseConfig extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseConfig): DatabaseConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatabaseConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseConfig;
  static deserializeBinaryFromReader(message: DatabaseConfig, reader: jspb.BinaryReader): DatabaseConfig;
}

export namespace DatabaseConfig {
  export type AsObject = {
    path: string,
  }
}

export class DataManagerConfig extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getBackendUpdatePeriod(): number;
  setBackendUpdatePeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataManagerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DataManagerConfig): DataManagerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataManagerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataManagerConfig;
  static deserializeBinaryFromReader(message: DataManagerConfig, reader: jspb.BinaryReader): DataManagerConfig;
}

export namespace DataManagerConfig {
  export type AsObject = {
    path: string,
    size: number,
    backendUpdatePeriod: number,
  }
}

export class VideoStreamConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getDeviceId(): number;
  setDeviceId(value: number): void;

  getExternalCameraSource(): string;
  setExternalCameraSource(value: string): void;

  getSleepingIntervalBetweenFrames(): number;
  setSleepingIntervalBetweenFrames(value: number): void;

  getFrameWidth(): number;
  setFrameWidth(value: number): void;

  getFrameHeight(): number;
  setFrameHeight(value: number): void;

  getFrameRate(): number;
  setFrameRate(value: number): void;

  getCropEnable(): boolean;
  setCropEnable(value: boolean): void;

  getCropX1(): number;
  setCropX1(value: number): void;

  getCropY1(): number;
  setCropY1(value: number): void;

  getCropX2(): number;
  setCropX2(value: number): void;

  getCropY2(): number;
  setCropY2(value: number): void;

  getFramesToGrab(): number;
  setFramesToGrab(value: number): void;

  getUseReadInsteadOfGrab(): boolean;
  setUseReadInsteadOfGrab(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoStreamConfig.AsObject;
  static toObject(includeInstance: boolean, msg: VideoStreamConfig): VideoStreamConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoStreamConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoStreamConfig;
  static deserializeBinaryFromReader(message: VideoStreamConfig, reader: jspb.BinaryReader): VideoStreamConfig;
}

export namespace VideoStreamConfig {
  export type AsObject = {
    enabled: boolean,
    deviceId: number,
    externalCameraSource: string,
    sleepingIntervalBetweenFrames: number,
    frameWidth: number,
    frameHeight: number,
    frameRate: number,
    cropEnable: boolean,
    cropX1: number,
    cropY1: number,
    cropX2: number,
    cropY2: number,
    framesToGrab: number,
    useReadInsteadOfGrab: boolean,
  }
}

export class AnalyticsConfig extends jspb.Message {
  getUpdatePeriod(): number;
  setUpdatePeriod(value: number): void;

  getContainersSize(): number;
  setContainersSize(value: number): void;

  getMaxItemsPerNotification(): number;
  setMaxItemsPerNotification(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyticsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyticsConfig): AnalyticsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnalyticsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyticsConfig;
  static deserializeBinaryFromReader(message: AnalyticsConfig, reader: jspb.BinaryReader): AnalyticsConfig;
}

export namespace AnalyticsConfig {
  export type AsObject = {
    updatePeriod: number,
    containersSize: number,
    maxItemsPerNotification: number,
  }
}

export class PredictorConfig extends jspb.Message {
  getNumberOfClassesToShow(): number;
  setNumberOfClassesToShow(value: number): void;

  getDefaultModelPath(): string;
  setDefaultModelPath(value: string): void;

  getDefaultModelConfigPath(): string;
  setDefaultModelConfigPath(value: string): void;

  getDefaultModelId(): number;
  setDefaultModelId(value: number): void;

  getCertaintyEnabled(): boolean;
  setCertaintyEnabled(value: boolean): void;

  getTop1HighCertaintyThreshold(): number;
  setTop1HighCertaintyThreshold(value: number): void;

  getMinConfidencePerPrediction(): number;
  setMinConfidencePerPrediction(value: number): void;

  getMinConfidenceSum(): number;
  setMinConfidenceSum(value: number): void;

  getFilteringModelPath(): string;
  setFilteringModelPath(value: string): void;

  getFilteringModelConfigPath(): string;
  setFilteringModelConfigPath(value: string): void;

  getFilteringModelId(): number;
  setFilteringModelId(value: number): void;

  getLookupTablePath(): string;
  setLookupTablePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorConfig): PredictorConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorConfig;
  static deserializeBinaryFromReader(message: PredictorConfig, reader: jspb.BinaryReader): PredictorConfig;
}

export namespace PredictorConfig {
  export type AsObject = {
    numberOfClassesToShow: number,
    defaultModelPath: string,
    defaultModelConfigPath: string,
    defaultModelId: number,
    certaintyEnabled: boolean,
    top1HighCertaintyThreshold: number,
    minConfidencePerPrediction: number,
    minConfidenceSum: number,
    filteringModelPath: string,
    filteringModelConfigPath: string,
    filteringModelId: number,
    lookupTablePath: string,
  }
}

export class DeviceManagerConfig extends jspb.Message {
  getLocalIp(): string;
  setLocalIp(value: string): void;

  getStateUpdatePeriod(): number;
  setStateUpdatePeriod(value: number): void;

  getResourcesUpdatePeriod(): number;
  setResourcesUpdatePeriod(value: number): void;

  getWorkerSharedFolder(): string;
  setWorkerSharedFolder(value: string): void;

  getModelsFolder(): string;
  setModelsFolder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceManagerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceManagerConfig): DeviceManagerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceManagerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceManagerConfig;
  static deserializeBinaryFromReader(message: DeviceManagerConfig, reader: jspb.BinaryReader): DeviceManagerConfig;
}

export namespace DeviceManagerConfig {
  export type AsObject = {
    localIp: string,
    stateUpdatePeriod: number,
    resourcesUpdatePeriod: number,
    workerSharedFolder: string,
    modelsFolder: string,
  }
}

export class Config extends jspb.Message {
  hasAgent(): boolean;
  clearAgent(): void;
  getAgent(): AgentConfig | undefined;
  setAgent(value?: AgentConfig): void;

  hasApi(): boolean;
  clearApi(): void;
  getApi(): ApiConfig | undefined;
  setApi(value?: ApiConfig): void;

  hasDatabase(): boolean;
  clearDatabase(): void;
  getDatabase(): DatabaseConfig | undefined;
  setDatabase(value?: DatabaseConfig): void;

  hasDataManager(): boolean;
  clearDataManager(): void;
  getDataManager(): DataManagerConfig | undefined;
  setDataManager(value?: DataManagerConfig): void;

  hasVideoStream(): boolean;
  clearVideoStream(): void;
  getVideoStream(): VideoStreamConfig | undefined;
  setVideoStream(value?: VideoStreamConfig): void;

  hasAnalytics(): boolean;
  clearAnalytics(): void;
  getAnalytics(): AnalyticsConfig | undefined;
  setAnalytics(value?: AnalyticsConfig): void;

  hasPredictor(): boolean;
  clearPredictor(): void;
  getPredictor(): PredictorConfig | undefined;
  setPredictor(value?: PredictorConfig): void;

  hasDeviceManager(): boolean;
  clearDeviceManager(): void;
  getDeviceManager(): DeviceManagerConfig | undefined;
  setDeviceManager(value?: DeviceManagerConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    agent?: AgentConfig.AsObject,
    api?: ApiConfig.AsObject,
    database?: DatabaseConfig.AsObject,
    dataManager?: DataManagerConfig.AsObject,
    videoStream?: VideoStreamConfig.AsObject,
    analytics?: AnalyticsConfig.AsObject,
    predictor?: PredictorConfig.AsObject,
    deviceManager?: DeviceManagerConfig.AsObject,
  }
}

export class GetConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigRequest): GetConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigRequest;
  static deserializeBinaryFromReader(message: GetConfigRequest, reader: jspb.BinaryReader): GetConfigRequest;
}

export namespace GetConfigRequest {
  export type AsObject = {
  }
}

export class GetConfigResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Config | undefined;
  setConfig(value?: Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigResponse): GetConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigResponse;
  static deserializeBinaryFromReader(message: GetConfigResponse, reader: jspb.BinaryReader): GetConfigResponse;
}

export namespace GetConfigResponse {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class SetConfigRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Config | undefined;
  setConfig(value?: Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetConfigRequest): SetConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConfigRequest;
  static deserializeBinaryFromReader(message: SetConfigRequest, reader: jspb.BinaryReader): SetConfigRequest;
}

export namespace SetConfigRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class SetConfigResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Config | undefined;
  setConfig(value?: Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetConfigResponse): SetConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConfigResponse;
  static deserializeBinaryFromReader(message: SetConfigResponse, reader: jspb.BinaryReader): SetConfigResponse;
}

export namespace SetConfigResponse {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class RestartRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartRequest): RestartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartRequest;
  static deserializeBinaryFromReader(message: RestartRequest, reader: jspb.BinaryReader): RestartRequest;
}

export namespace RestartRequest {
  export type AsObject = {
  }
}

export class RestartResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestartResponse): RestartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartResponse;
  static deserializeBinaryFromReader(message: RestartResponse, reader: jspb.BinaryReader): RestartResponse;
}

export namespace RestartResponse {
  export type AsObject = {
  }
}

