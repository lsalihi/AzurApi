'use strict';


var mongoose = require('mongoose'),
  StopTime = mongoose.model('StopTime');

exports.list_all_stopTimes = function(req, res) {
  StopTime.find({}, function(err, stopTime) {
    if (err)
      res.send(err);
    res.json(stopTime);
  });
};




exports.create_a_stopTime = function(req, res) {
  console.log("create stopTime  %s",req.body);
  var new_stopTime = new StopTime(req.body);
  new_stopTime.save(function(err, stopTime) {
    if (err)
      res.send(err);
    res.json(stopTime);
  });
};


exports.read_a_stopTime = function(req, res) {
  StopTime.findById(req.params.stopTimeId, function(err, stopTime) {
    if (err)
      res.send(err);
    res.json(stopTime);
  });
};


exports.update_a_stopTime = function(req, res) {
  StopTime.findOneAndUpdate({_id: req.params.stopTimeId}, req.body, {new: true}, function(err, stopTime) {
    if (err)
      res.send(err);
    res.json(stopTime);
  });
};


exports.delete_a_stopTime = function(req, res) {


  StopTime.remove({
    _id: req.params.stopTimeId
  }, function(err, stopTime) {
    if (err)
      res.send(err);
    res.json({ message: 'StopTime successfully deleted' });
  });
};
