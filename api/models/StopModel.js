'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StopSchema = new Schema({
  stop_id: {
    type: String
  },
  stop_code: {
    type: String
  },
  stop_name: {
    type: String
  },
  stop_lat: {
    type: String
  },
  stop_lon: {
    type: String
  },
  location_type: {
    type: String
  }
});

module.exports = mongoose.model('Stop', StopSchema);