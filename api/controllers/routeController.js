'use strict';


var mongoose = require('mongoose'),
  Route = mongoose.model('Route');

exports.list_all_routes = function(req, res) {
  Route.find({}, function(err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};




exports.create_a_route = function(req, res) {
  console.log("create route  %s",req.body);
  var new_route = new Route(req.body);
  new_route.save(function(err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};


exports.read_a_route = function(req, res) {
  Route.findById(req.params.routeId, function(err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};


exports.update_a_route = function(req, res) {
  Route.findOneAndUpdate({_id: req.params.routeId}, req.body, {new: true}, function(err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};


exports.delete_a_route = function(req, res) {


  Route.remove({
    _id: req.params.routeId
  }, function(err, route) {
    if (err)
      res.send(err);
    res.json({ message: 'Route successfully deleted' });
  });
};
