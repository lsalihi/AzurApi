'use strict';
module.exports = function(app) {
  var agencyController = require('../controllers/agencyController');

  // -- Routes
  app.route('/agencies')
    .get(agencyController.list_all_agencies)
    .post(agencyController.create_a_agency);


/*  app.route('/tasks/:taskId')
    .get(--.read_a_task)
    .put(--.update_a_task)
    .delete(--.delete_a_task);*/


    var tripController = require('../controllers/tripController');

    // -- Routes
    app.route('/trips')
      .get(tripController.list_all_trips)
      .post(tripController.create_a_trip);
    
    
      var transfertController = require('../controllers/transfertController');
    
      // -- Routes
      app.route('/transferts')
        .get(transfertController.list_all_transferts)
        .post(transfertController.create_a_transfert);
    
    
        var stopTimeController = require('../controllers/stopTimeController');
    
        // -- Routes
        app.route('/stopTimes')
          .get(stopTimeController.list_all_stopTimes)
          .post(stopTimeController.create_a_stopTime);
    
    
          var stopController = require('../controllers/stopController');
    
    // -- Routes
    app.route('/stops')
      .get(stopController.list_all_stops)
      .post(stopController.create_a_stop);
    
    
      var routeController = require('../controllers/routeController');
    
    // -- Routes
    app.route('/routes')
      .get(routeController.list_all_routes)
      .post(routeController.create_a_route);
    
      var calendarController = require('../controllers/calendarController');
    
    // -- Routes
    app.route('/calendars')
      .get(calendarController.list_all_calendars)
      .post(calendarController.create_a_calendar);
    
    var calendarDateController = require('../controllers/calendrierDateController');
    app.route('/calendarDates')
        .get(calendarDateController.list_all_calendarDates)
        .post(calendarDateController.create_a_calendarDate);
    
};