var mongoURL = "	mongodb://sjsu123:sjsu123@ds023912.mlab.com:23912/sensordata";

var MongoClient = require('mongodb').MongoClient;

var database = null;

//MongoClient.connect("mongodb://shalini:shalini@ds059694.mongolab.com:59694/project281", {

MongoClient.connect("mongodb://sjsu123:sjsu123@ds023912.mlab.com:23912/sensordata?", {
	

	db : {},
	server : {
		poolSize : 100
	},
	replSet : {},
	mongos : {}
}, function(err, db)
{
	console.log('connection created ravi'+err);
	console.log('connection created ravi'+db);
	console.log('connection created ravi');
	console.log('connection created ravi'+database);
	database = db;
	exports.sensorDataCollection = db.collection('sensordata');
});


