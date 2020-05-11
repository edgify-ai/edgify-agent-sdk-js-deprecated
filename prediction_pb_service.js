// package: edgify
// file: prediction.proto

var prediction_pb = require("./prediction_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EdgifyService = (function () {
  function EdgifyService() {}
  EdgifyService.serviceName = "edgify.EdgifyService";
  return EdgifyService;
}());

EdgifyService.GetPrediction = {
  methodName: "GetPrediction",
  service: EdgifyService,
  requestStream: false,
  responseStream: false,
  requestType: prediction_pb.PredictionRequest,
  responseType: prediction_pb.PredictionResponse
};

EdgifyService.CreateGroundTruth = {
  methodName: "CreateGroundTruth",
  service: EdgifyService,
  requestStream: false,
  responseStream: false,
  requestType: prediction_pb.GroundTruthRequest,
  responseType: prediction_pb.GroundTruthResponse
};

EdgifyService.GetSamples = {
  methodName: "GetSamples",
  service: EdgifyService,
  requestStream: false,
  responseStream: false,
  requestType: prediction_pb.GetSampleRequest,
  responseType: prediction_pb.GetSampleResponse
};

EdgifyService.UpdateSample = {
  methodName: "UpdateSample",
  service: EdgifyService,
  requestStream: false,
  responseStream: false,
  requestType: prediction_pb.UpdateSampleRequest,
  responseType: prediction_pb.UpdateSampleResponse
};

exports.EdgifyService = EdgifyService;

function EdgifyServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EdgifyServiceClient.prototype.getPrediction = function getPrediction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EdgifyService.GetPrediction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EdgifyServiceClient.prototype.createGroundTruth = function createGroundTruth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EdgifyService.CreateGroundTruth, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EdgifyServiceClient.prototype.getSamples = function getSamples(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EdgifyService.GetSamples, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EdgifyServiceClient.prototype.updateSample = function updateSample(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EdgifyService.UpdateSample, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EdgifyServiceClient = EdgifyServiceClient;

