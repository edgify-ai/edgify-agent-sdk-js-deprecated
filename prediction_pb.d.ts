// package: edgify
// file: prediction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PredictionItem extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionItem.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionItem): PredictionItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionItem;
  static deserializeBinaryFromReader(message: PredictionItem, reader: jspb.BinaryReader): PredictionItem;
}

export namespace PredictionItem {
  export type AsObject = {
    dataList: Array<string>,
  }
}

export class Prediction extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getPredictedAt(): string;
  setPredictedAt(value: string): void;

  getModelId(): number;
  setModelId(value: number): void;

  clearPredictionsList(): void;
  getPredictionsList(): Array<PredictionItem>;
  setPredictionsList(value: Array<PredictionItem>): void;
  addPredictions(value?: PredictionItem, index?: number): PredictionItem;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prediction.AsObject;
  static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prediction;
  static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
}

export namespace Prediction {
  export type AsObject = {
    uuid: string,
    duration: number,
    predictedAt: string,
    modelId: number,
    predictionsList: Array<PredictionItem.AsObject>,
    image?: Image.AsObject,
  }
}

export class Image extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    uuid: string,
    image: Uint8Array | string,
  }
}

export class GroundTruth extends jspb.Message {
  hasPrediction(): boolean;
  clearPrediction(): void;
  getPrediction(): Prediction | undefined;
  setPrediction(value?: Prediction): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruth.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruth): GroundTruth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruth;
  static deserializeBinaryFromReader(message: GroundTruth, reader: jspb.BinaryReader): GroundTruth;
}

export namespace GroundTruth {
  export type AsObject = {
    prediction?: Prediction.AsObject,
    label: string,
  }
}

export class PredictionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionRequest): PredictionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionRequest;
  static deserializeBinaryFromReader(message: PredictionRequest, reader: jspb.BinaryReader): PredictionRequest;
}

export namespace PredictionRequest {
  export type AsObject = {
  }
}

export class PredictionResponse extends jspb.Message {
  hasPrediction(): boolean;
  clearPrediction(): void;
  getPrediction(): Prediction | undefined;
  setPrediction(value?: Prediction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionResponse): PredictionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionResponse;
  static deserializeBinaryFromReader(message: PredictionResponse, reader: jspb.BinaryReader): PredictionResponse;
}

export namespace PredictionResponse {
  export type AsObject = {
    prediction?: Prediction.AsObject,
  }
}

export class GroundTruthRequest extends jspb.Message {
  hasGroundTruth(): boolean;
  clearGroundTruth(): void;
  getGroundTruth(): GroundTruth | undefined;
  setGroundTruth(value?: GroundTruth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruthRequest): GroundTruthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruthRequest;
  static deserializeBinaryFromReader(message: GroundTruthRequest, reader: jspb.BinaryReader): GroundTruthRequest;
}

export namespace GroundTruthRequest {
  export type AsObject = {
    groundTruth?: GroundTruth.AsObject,
  }
}

export class GroundTruthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruthResponse): GroundTruthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruthResponse;
  static deserializeBinaryFromReader(message: GroundTruthResponse, reader: jspb.BinaryReader): GroundTruthResponse;
}

export namespace GroundTruthResponse {
  export type AsObject = {
  }
}

export class GetSampleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSampleRequest): GetSampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSampleRequest;
  static deserializeBinaryFromReader(message: GetSampleRequest, reader: jspb.BinaryReader): GetSampleRequest;
}

export namespace GetSampleRequest {
  export type AsObject = {
  }
}

export class GetSampleResponse extends jspb.Message {
  clearSamplesList(): void;
  getSamplesList(): Array<DataSample>;
  setSamplesList(value: Array<DataSample>): void;
  addSamples(value?: DataSample, index?: number): DataSample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSampleResponse): GetSampleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSampleResponse;
  static deserializeBinaryFromReader(message: GetSampleResponse, reader: jspb.BinaryReader): GetSampleResponse;
}

export namespace GetSampleResponse {
  export type AsObject = {
    samplesList: Array<DataSample.AsObject>,
  }
}

export class UpdateSampleRequest extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): DataSample | undefined;
  setSample(value?: DataSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSampleRequest): UpdateSampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSampleRequest;
  static deserializeBinaryFromReader(message: UpdateSampleRequest, reader: jspb.BinaryReader): UpdateSampleRequest;
}

export namespace UpdateSampleRequest {
  export type AsObject = {
    sample?: DataSample.AsObject,
  }
}

export class UpdateSampleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSampleResponse): UpdateSampleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSampleResponse;
  static deserializeBinaryFromReader(message: UpdateSampleResponse, reader: jspb.BinaryReader): UpdateSampleResponse;
}

export namespace UpdateSampleResponse {
  export type AsObject = {
  }
}

export class DataSample extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getOpened(): boolean;
  setOpened(value: boolean): void;

  getDatasetType(): string;
  setDatasetType(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSample.AsObject;
  static toObject(includeInstance: boolean, msg: DataSample): DataSample.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSample;
  static deserializeBinaryFromReader(message: DataSample, reader: jspb.BinaryReader): DataSample;
}

export namespace DataSample {
  export type AsObject = {
    uuid: string,
    path: string,
    label: string,
    size: number,
    opened: boolean,
    datasetType: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

