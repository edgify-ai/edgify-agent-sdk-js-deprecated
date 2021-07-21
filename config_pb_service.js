// package: 
// file: config.proto

var config_pb = require("./config_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConfigService = (function () {
  function ConfigService() {}
  ConfigService.serviceName = "ConfigService";
  return ConfigService;
}());

ConfigService.GetConfig = {
  methodName: "GetConfig",
  service: ConfigService,
  requestStream: false,
  responseStream: false,
  requestType: config_pb.GetConfigRequest,
  responseType: config_pb.GetConfigResponse
};

ConfigService.SetConfig = {
  methodName: "SetConfig",
  service: ConfigService,
  requestStream: false,
  responseStream: false,
  requestType: config_pb.SetConfigRequest,
  responseType: config_pb.SetConfigResponse
};

ConfigService.Restart = {
  methodName: "Restart",
  service: ConfigService,
  requestStream: false,
  responseStream: false,
  requestType: config_pb.RestartRequest,
  responseType: config_pb.RestartResponse
};

exports.ConfigService = ConfigService;

function ConfigServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConfigServiceClient.prototype.getConfig = function getConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigService.GetConfig, {
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

ConfigServiceClient.prototype.setConfig = function setConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigService.SetConfig, {
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

ConfigServiceClient.prototype.restart = function restart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigService.Restart, {
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

exports.ConfigServiceClient = ConfigServiceClient;

