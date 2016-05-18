var mongoURL = "mongodb://cmpe281:sjsu123@ds021671.mlab.com:21671/cmpe281project?";

var MongoClient = require('mongodb').MongoClient;

var database = null;

//MongoClient.connect("mongodb://shalini:shalini@ds059694.mongolab.com:59694/project281", {

MongoClient.connect("mongodb://cmpe281:sjsu123@ds021671.mlab.com:21671/cmpe281project?", {
	db : {},
	server : {
		poolSize : 100
	},
	replSet : {},
	mongos : {}
}, function(err, db)
{

	console.log('connection created');

	database = db;
	exports.sensorDataCollection = db.collection('sensordata');
});


