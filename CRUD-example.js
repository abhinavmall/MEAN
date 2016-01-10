var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error,db){
  if(error){
    console.log('Error '+error);
    process.exit(1);
  }

  var doc= {
    title: 'Jaws',
    year: 1976,
    director: 'Steven Spielberg',
    rating: 'PG'
  };

// .collection gives a handle to individual collection
  db.collection('movies').insert(doc, function(error,result){
    if(error){
      console.log('Error '+error);
      process.exit(1);
    }

    //var query = {year:1975};
    db.collection('movies').find().toArray(function(error,docs){
      if(error){
        console.log('Error '+error);
        process.exit(1);
      }

      console.log('Found docs: ');
      docs.forEach(function(doc){
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
