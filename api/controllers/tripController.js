'use strict';


var mongoose = require('mongoose'),
  Trip = mongoose.model('Trip');

exports.list_all_trips = function(req, res) {
  Trip.find({}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};




exports.create_a_trip = function(req, res) {
  console.log("create trip  %s",req.body);
  var new_trip = new Trip(req.body);
  new_trip.save(function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.read_a_trip = function(req, res) {
  Trip.findById(req.params.tripId, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.update_a_trip = function(req, res) {
  Trip.findOneAndUpdate({_id: req.params.tripId}, req.body, {new: true}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};


exports.delete_a_trip = function(req, res) {


  Trip.remove({
    _id: req.params.tripId
  }, function(err, trip) {
    if (err)
      res.send(err);
    res.json({ message: 'Trip successfully deleted' });
  });
};
