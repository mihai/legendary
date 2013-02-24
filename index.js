"use strict";

exports = module.exports = require("./lib/legendary");

exports.Promise = require("./lib/Promise");

exports.when = require("./lib/when");
exports.isThenable = require("./lib/isThenable");

var Notifier = require("./lib/Notifier");
exports.fulfilled = function(value){
  return new Notifier().notifySync(true, value).promise;
};

exports.rejected = function(reason){
  return new Notifier().notifySync(false, reason, exports.unhandledRejection(reason)).promise;
};