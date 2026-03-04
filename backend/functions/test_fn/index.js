"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.post("/cache", (req, res) => {

    const catalystApp = catalyst.initialize(req);

	const requestQuery = req.query;

	//Get Segment instance with segment ID (If no ID is given, Default segment is used)
	let segment = catalystApp.cache().segment();
	//Insert Cache using put by passing the key-value pair.
	let cachePromise = segment.put(requestQuery.name, requestQuery.value, requestQuery.expiry);

	cachePromise
		.then((cache) => {
			console.log("\nInserted Cache : " + JSON.stringify(cache));
			res.status(200).json(cache);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err);
		});

});

app.post("/datastore", (req, res) => {

    let catalystApp = catalyst.initialize(req, {type: catalyst.type.applogic});

	const requestBody = req.body;

	//Get table meta object without details.
	let table = catalystApp.datastore().table('SampleTable');

	//Use Table Meta Object to insert the row which returns a promise
	let insertPromise = table.insertRow({
		Name: requestBody.name,
		Age: requestBody.age,
		SearchIndexedColumn: requestBody.id
	});

	insertPromise
		.then((row) => {
			console.log("\nInserted Row : " + JSON.stringify(row));
			res.status(200).json(row);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err);
		});
});

app.all("/", (req,res) => {

	res.status(200).send("I am Live and Ready.");

});

module.exports = app;
