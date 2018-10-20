'use strict';


var mongoose = require('mongoose'),
  CalendarDate = mongoose.model('CalendarDate');

exports.list_all_calendarDates = function(req, res) {
  CalendarDate.find({}, function(err, calendarDate) {
    if (err)
      res.send(err);
    res.json(calendarDate);
  });
};




exports.create_a_calendarDate = function(req, res) {
  console.log("create calendarDate  %s",req.body);
  var new_calendarDate = new CalendarDate(req.body);
  new_calendarDate.save(function(err, calendarDate) {
    if (err)
      res.send(err);
    res.json(calendarDate);
  });
};


exports.read_a_calendarDate = function(req, res) {
  CalendarDate.findById(req.params.calendarDateId, function(err, calendarDate) {
    if (err)
      res.send(err);
    res.json(calendarDate);
  });
};


exports.update_a_calendarDate = function(req, res) {
  CalendarDate.findOneAndUpdate({_id: req.params.calendarDateId}, req.body, {new: true}, function(err, calendarDate) {
    if (err)
      res.send(err);
    res.json(calendarDate);
  });
};


exports.delete_a_calendarDate = function(req, res) {


  CalendarDate.remove({
    _id: req.params.calendarDateId
  }, function(err, calendarDate) {
    if (err)
      res.send(err);
    res.json({ message: 'CalendarDate successfully deleted' });
  });
};
