var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://admin:admin@ds023463.mlab.com:23463/qqrcoisa';

const connection = new Promise(function(resolve, reject) {
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to Mongo DB");
        if(err){
          reject(err);
        }
        if(db){
          resolve(db);
        }
    });
  });

module.exports = connection;
