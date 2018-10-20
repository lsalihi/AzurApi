//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    Agency = require('./models/agencyModel'),//created model loading here
    CalendarDate = require('./api/models/calendarDateModel'),
    Calendar = require('./api/models/calendarModel'),
    Route = require('./api/models/routeModel'),
    Stop = require('./api/models/stopModel'),
    StopTime = require('./api/models/stopTimeModel'),
    Transfert = require('./api/models/transfertModel'),
    Trip = require('./api/models/tripModel'),
    morgan  = require('morgan'),
    mongoose = require('mongoose'),
    //favicon = require('serve-favicon'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler');
    
Object.assign=require('object-assign')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
//app.use(morgan('combined'));
// parse application/json
app.use(bodyParser.json());                       
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = 'mongodb+srv://mongo:mongo@azurcluster-x5wtm.mongodb.net/botdb',//process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null) {
  var mongoHost, mongoPort, mongoDatabase, mongoPassword, mongoUser;
  // If using plane old env vars via service discovery
  if (process.env.DATABASE_SERVICE_NAME) {
    var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
    mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'];
    mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'];
    mongoDatabase = process.env[mongoServiceName + '_DATABASE'];
    mongoPassword = process.env[mongoServiceName + '_PASSWORD'];
    mongoUser = process.env[mongoServiceName + '_USER'];

  // If using env vars from secret from service binding  
  } else if (process.env.database_name) {
    mongoDatabase = process.env.database_name;
    mongoPassword = process.env.password;
    mongoUser = process.env.username;
    var mongoUriParts = process.env.uri && process.env.uri.split("//");
    if (mongoUriParts.length == 2) {
      mongoUriParts = mongoUriParts[1].split(":");
      if (mongoUriParts && mongoUriParts.length == 2) {
        mongoHost = mongoUriParts[0];
        mongoPort = mongoUriParts[1];
      }
    }
  }

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
  }
  /*else{
	  // mongoose instance connection url connection
	  console.log("mongoose connexion...");
		mongoose.Promise = global.Promise;
		mongoose.connect(mongoURL, { useNewUrlParser: true }); 
		console.log("Done !...");
  }*/
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
	
		// mongoose instance connection url connection
	   //console.log("mongoose connexion...");
	   mongoose.Promise = global.Promise;
	   mongoose.connect(mongoURL, { useNewUrlParser: true }); 
  });
};

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  console.log('home page .. %s', req.body);
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    var col = db.collection('counts');
    // Create a document with request IP and current time of request
    col.insert({ip: req.ip, date: Date.now()});
    col.count(function(err, count){
      if (err) {
        console.log('Error running count. Message:\n'+err);
      }
      res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    });
  } else {
    res.render('index.html', { pageCountMessage : null});
  }
});

app.get('/pagecount', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  console.log('page count ..');
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    db.collection('counts').count(function(err, count ){
      res.send('{ pageCount: ' + count + '}');
    });
  } else {
    res.send('{ pageCount: -1 }');
  }
});

var routes = require('./api/routes/insertRoutes'); //importing route
routes(app); //register the route


// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
