'use strict';


var mongoose = require('mongoose'),
  Calendar = mongoose.model('Calendar');

exports.list_all_calendars = function(req, res) {
  Calendar.find({}, function(err, calendar) {
    if (err)
      res.send(err);
    res.json(calendar);
  });
};




exports.create_a_calendar = function(req, res) {
  console.log("create calendar  %s",req.body);
  var new_calendar = new Calendar(req.body);
  new_calendar.save(function(err, calendar) {
    if (err)
      res.send(err);
    res.json(calendar);
  });
};


exports.read_a_calendar = function(req, res) {
  Calendar.findById(req.params.calendarId, function(err, calendar) {
    if (err)
      res.send(err);
    res.json(calendar);
  });
};


exports.update_a_calendar = function(req, res) {
  Calendar.findOneAndUpdate({_id: req.params.calendarId}, req.body, {new: true}, function(err, calendar) {
    if (err)
      res.send(err);
    res.json(calendar);
  });
};


exports.delete_a_calendar = function(req, res) {


  Calendar.remove({
    _id: req.params.calendarId
  }, function(err, calendar) {
    if (err)
      res.send(err);
    res.json({ message: 'Calendar successfully deleted' });
  });
};
