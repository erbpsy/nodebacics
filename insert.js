var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
var customer={name:"customer", gender:"Male", Items:5, Amount:100.57}

var customers=[
    {name:"customer", gender:"Male", Items:5, Amount:100.57},
    {name:"customer", gender:"Male", Items:5, Amount:100.57},
    {name:"customer", gender:"Male", Items:5, Amount:100.57},
    {name:"customer", gender:"Male", Items:5, Amount:100.57},
    {name:"customer", gender:"Male", Items:5, Amount:100.57},
    {name:"customer", gender:"Male", Items:5, Amount:100.57}
]

  dbo.collection("customers").insertOne(customer , function(err, res) {
    if (err) throw err;
    console.log("1 document inserted in db");


    db.close();
  });

  dbo.collection("customers").insertMany(customers , function(err, res) {
    if (err) throw err;
    console.log(customers.length +" document inserted in db");


    db.close();
  });

});