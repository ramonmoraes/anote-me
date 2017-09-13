module.exports ={

 insertOneDoc : function(db, file, collectionName) {
  // Get the documents collection
  let obj = {
    nome:'oi',
    q:'masoq?'
  };

  const collection = db.collection(collectionName);
  collection.insertOne(obj, function(err, result) {
        if (err)
          throw err;
        console.log(result);
      });
}, // -----------------

oi: function(string) {
  console.log(string);
}


}
