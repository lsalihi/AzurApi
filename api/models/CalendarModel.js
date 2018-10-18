'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CalendarSchema = new Schema({
  service_id: {
    type: String
  },
  start_date: {
    type: String
  },
  end_date: {
    type: String
  },
  monday: {
    type: Boolean,
    default: false
  },
  tuesday: {
    type: Boolean,
    default: false
  },
  wednesday: {
    type: Boolean,
    default: false
  },
  thursday: {
    type: Boolean,
    default: false
  },
  friday: {
    type: Boolean,
    default: false
  },
  saturday: {
    type: Boolean,
    default: false
  },
  sunday: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Calendar', CalendarSchema);