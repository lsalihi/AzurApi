'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AgencySchema = new Schema({
    agency_id: {
      type: Number
    },
    agency_name: {
      type: String
    },
    agency_url: {
      type: String
    },
    agency_timezone: {
      type: String
    },
    agency_lang: {
      type: String
    },
    agency_phone: {
      type: String
    }
});

module.exports = mongoose.model('Agency', AgencySchema);