var MongoID = require('mongodb').ObjectID;

function dropId(file){
  delete file["_id"];
  return file
}

module.exports ={

 insertOneDoc : function(db, file, collectionName) {
  // Get the documents collection
  const collection = db.collection(collectionName);

  collection.insertOne(file, function(err, result) {
        if (err)
          throw err;
      });
},


  insertManyDocs : function(db, files, collectionName){
    const collection = db.collection(collectionName);

    collection.insertMany(files, function(err, result) {
          if (err)
            throw err;
        });
  },


  updateOneDoc : function(db, file,collectionName){
    const collection = db.collection(collectionName);
    let id = MongoID(file._id);

    collection.updateOne({_id:id }, { $set : dropId(file) }, function(err, result){
      if (err)
        throw err
    });
  },


  findOne : function(db, id, collectionName){ // Find One não ficara neste js File
    const collection = db.collection(collectionName);

    collection.findOne({_id:MongoID(id)}, function(err, res){
      if (err)
        throw err;
    })
  }

}
