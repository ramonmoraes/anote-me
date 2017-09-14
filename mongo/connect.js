var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://admin:admin@ds023463.mlab.com:23463/qqrcoisa';
const crud = require("./management.js");
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to Mongo DB");

  // crud.insertOneDoc(db , {
  //   nome:"Ramon",
  //   niver:'1994-05-17',
  //   supino:'30kg'
  // }, 'wofe12');

  crud.updateOneDoc(db, {
    nome:"Ramonzits",
    niver:"XINDEIRU",
    supino:'30kg dnovo :(',
    _id: '59ba838f998ae1244c07e016'
  }, 'wofe12')

  // crud.findOne(db,'59ba85db549f96115c7424b6' , 'wofe12')
});
