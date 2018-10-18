'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TripSchema = new Schema({
  route_id: {
    type: String
  },
  service_id: {
    type: String
  },
  trip_id: {
    type: String
  },
  trip_headsign: {
    type: String
  },
  direction_id: {
    type: String
  },
  block_id: {
    type: String
  },
  wheelchair_accessible: {
    type: String
  },
  bikes_allowed: {
    type: String
  }
});

module.exports = mongoose.model('Trip', TripSchema);