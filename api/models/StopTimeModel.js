'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StopTimeSchema = new Schema({
  trip_id: {
    type: String
  },
  arrival_time: {
    type: String
  },
  departure_time: {
    type: String
  },
  stop_id: {
    type: String
  },
  stop_sequence: {
    type: String
  },
  pickup_type: {
    type: String
  },
  drop_off_type: {
    type: String
  }
});

module.exports = mongoose.model('StopTime', StopTimeSchema);