"use strict";

/**required dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const http = require('http');
const API_KEY = require('./apiKey');

var port = process.env.PORT || 3000;

/** desclarations of intents */
const ECHO_INTENT = "echo";

express().use(
  bodyParser.urlencoded({
    extended: true
  })
);

express().use(bodyParser.json());


const app = dialogflow({debug: true}); //new dialogflow({request: request, response: response, });

/*
exports.dialogflowWithFireBase = functions.https.onRequest((request, response) => {
  const app = new DialogflowApp({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));
});
*/

	  app.intent('Default Welcome Intent', conv => {
	  conv.ask('What do you wanna do next?')
	});

	 
	app.intent(ECHO_INTENT, (conv, params) => {
		//let context = app.getContext("echoText");
		console.log("====== params:" , params);
		console.log("====== echoText ..:" , params.echoText); // OU params["echoText"]
		const echoText = params.echoText ? params.echoText : 'No text specified';
		console.log("======" , echoText);
		conv.ask(echoText);
	});


express().use(bodyParser.json(), app).listen(port);