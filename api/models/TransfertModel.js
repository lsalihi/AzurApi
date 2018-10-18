'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransfertSchema = new Schema({
  from_stop_id: {
    type: String
  },
  to_stop_id: {
    type: String
  },
  transfer_type: {
    type: String
  },
  min_transfer_time: {
    type: String
  }
});

module.exports = mongoose.model('Transfert', TransfertSchema);