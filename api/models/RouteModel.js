'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RouteSchema = new Schema({
  route_id: {
    type: String
  },
  agency_id: {
    type: Number
  },
  route_short_name: {
    type: String
  },
  route_long_name: {
    type: String
  },
  route_type: {
    type: String
  }
});

module.exports = mongoose.model('Route', RouteSchema);