'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CalendarDateSchema = new Schema({
  service_id: {
    type: Number
  },
  date: {
    type: String
  },
  exception_type: {
    type: String
  }
});

module.exports = mongoose.model('CalendarDate', CalendarDateSchema);