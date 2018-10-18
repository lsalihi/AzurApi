'use strict';


var mongoose = require('mongoose'),
  Agency = mongoose.model('Agency');

exports.list_all_agencies = function(req, res) {
  Agency.find({}, function(err, agency) {
    if (err)
      res.send(err);
    res.json(agency);
  });
};




exports.create_a_agency = function(req, res) {
  console.log("create agency  %s",req.body);
  var new_agency = new Agency(req.body);
  new_agency.save(function(err, agency) {
    if (err)
      res.send(err);
    res.json(agency);
  });
};


exports.read_a_agency = function(req, res) {
  Agency.findById(req.params.agencyId, function(err, agency) {
    if (err)
      res.send(err);
    res.json(agency);
  });
};


exports.update_a_agency = function(req, res) {
  Agency.findOneAndUpdate({_id: req.params.agencyId}, req.body, {new: true}, function(err, agency) {
    if (err)
      res.send(err);
    res.json(agency);
  });
};


exports.delete_a_agency = function(req, res) {


  Agency.remove({
    _id: req.params.agencyId
  }, function(err, agency) {
    if (err)
      res.send(err);
    res.json({ message: 'Agency successfully deleted' });
  });
};
