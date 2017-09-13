var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://admin:admin@ds023463.mlab.com:23463/qqrcoisa';
const crud = require("./management.js");
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to Mongo DB");

  crud.oi('olaaar')

  crud.insertOneDoc(db, 'x', 'wofe12');
  db.close();
});
