'use strict';


var mongoose = require('mongoose'),
  Stop = mongoose.model('Stop');

exports.list_all_stops = function(req, res) {
  Stop.find({}, function(err, stop) {
    if (err)
      res.send(err);
    res.json(stop);
  });
};




exports.create_a_stop = function(req, res) {
  console.log("create stop  %s",req.body);
  var new_stop = new Stop(req.body);
  new_stop.save(function(err, stop) {
    if (err)
      res.send(err);
    res.json(stop);
  });
};


exports.read_a_stop = function(req, res) {
  Stop.findById(req.params.stopId, function(err, stop) {
    if (err)
      res.send(err);
    res.json(stop);
  });
};


exports.update_a_stop = function(req, res) {
  Stop.findOneAndUpdate({_id: req.params.stopId}, req.body, {new: true}, function(err, stop) {
    if (err)
      res.send(err);
    res.json(stop);
  });
};


exports.delete_a_stop = function(req, res) {


  Stop.remove({
    _id: req.params.stopId
  }, function(err, stop) {
    if (err)
      res.send(err);
    res.json({ message: 'Stop successfully deleted' });
  });
};
