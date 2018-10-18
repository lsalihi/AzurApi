'use strict';


var mongoose = require('mongoose'),
  Transfert = mongoose.model('Transfert');

exports.list_all_transferts = function(req, res) {
  Transfert.find({}, function(err, transfert) {
    if (err)
      res.send(err);
    res.json(transfert);
  });
};




exports.create_a_transfert = function(req, res) {
  console.log("create transfert  %s",req.body);
  var new_transfert = new Transfert(req.body);
  new_transfert.save(function(err, transfert) {
    if (err)
      res.send(err);
    res.json(transfert);
  });
};


exports.read_a_transfert = function(req, res) {
  Transfert.findById(req.params.transfertId, function(err, transfert) {
    if (err)
      res.send(err);
    res.json(transfert);
  });
};


exports.update_a_transfert = function(req, res) {
  Transfert.findOneAndUpdate({_id: req.params.transfertId}, req.body, {new: true}, function(err, transfert) {
    if (err)
      res.send(err);
    res.json(transfert);
  });
};


exports.delete_a_transfert = function(req, res) {


  Transfert.remove({
    _id: req.params.transfertId
  }, function(err, transfert) {
    if (err)
      res.send(err);
    res.json({ message: 'Transfert successfully deleted' });
  });
};
