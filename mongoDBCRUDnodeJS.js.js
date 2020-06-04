var customerDetails = require('./customerDetails.json');
var itemDetails = require('./itemDetails.json');
var customerIds = [];
var itemIds = [];
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const connect = require("./connect"); // url from connect module
const client = new MongoClient(connect.database.url, {
    useUnifiedTopology: true
});

// database name
const dbName = 'test';
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    //Required field validation performed on mongo shell using
    //db.createCollection("items", {validator: {$jsonSchema: {bsonType: "object",required: [ "manufacturer", "model", "price"]}}})
    //db.createCollection("customers", {validator: {$jsonSchema: {bsonType: "object",required: [ "fname", "lname", "email", "mobile", "homeAdd.town"]}}})
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //-----------------------------------Perform CRUD to database-----------------------------------------
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    insertCustomers(db, function() {
      findCustomer(db,function(){
        updateCustomer(db, function(){
          findCustomers(db, function(){
            removeCustomer(db, function() {
            });
          })
        })
      })
    });
    insertItems(db, function() {
      findItem(db,function(){
        updateItem(db, function(){
          findItems(db, function(){
            removeItem(db, function() {
              findOrders(db, function(){
                client.close();
              })
            });
          })
        })
      })
    });
    /*updateRandomCustomer(db, function() {
        client.close();
    });*/
});
////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------Insert into database-----------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
const insertCustomers = function(db, callback) {
    const collection = db.collection('customers');
    var obj;
    collection.insertMany([
       customerDetails[0], customerDetails[1], customerDetails[2]
    ], function(err, result) {
        // using the assert module for testing
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the customers collection");
        callback(result);
    });
}
const insertItems = function(db, callback) {
  //capped through mongo shell db.createCollection('items', {capped: true, size : 5242880, max : 10})
    const collection = db.collection('items');
    var obj;
    collection.insertMany([
       itemDetails[0], itemDetails[1], itemDetails[2]
    ], function(err, result) {
        // using the assert module for testing
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the items collection");
        callback(result);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------=Find documents-----------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
const findCustomers = function(db, callback) {
    // retrieve all customers
    const collection = db.collection('customers');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following customer records");
        for(var i in docs){
          customerIds.push(docs[i]._id);
        }
        console.log(docs)
        callback(docs);
    });
}
const findItems = function(db, callback) {
    //retrieve all items
    const collection = db.collection('items');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following item records");
        for(var i in docs){
          itemIds.push(docs[i]._id);
        }
        console.log(docs[i])
        callback(docs);
    });
}
const findOrders = function(db, callback) {
    const collection = db.collection('customers');
    // Find random order

    collection.aggregate([{ $lookup: {from: "items",localField:"orders",foreignField:"_id",as: "orderDetails"} }]).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the order details");
        console.log(docs);
        callback(docs);
    });
}
const findCustomerFiltered = function(db, callback) {
    const collection = db.collection('customers');
    // Find some document - with a filter
    collection.find({'fname': 'Elizabeth'}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
}
const findItemFiltered = function(db, callback) {
    const collection = db.collection('items');
    // Find some document - with a filter
    collection.find({model: { $regex: /^Iphone/i }}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------Update Documents-----------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
const updateCustomer = function(db,callback) {
    const collection = db.collection('customers');
    // Update document where fname id "Emma", set to "123@123mail.com"
    collection.updateOne({
        fname: "Savannah"
    }, {
        $set: {
            email : "123@123mail.com"
        }
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Updated the customer document");
        callback(result);
    });
}
const updateItem = function(db,callback) {
    const collection = db.collection('items');
    // Update document where model is an Iphone, set to price to £700
    collection.updateOne({
        //model: { $regex: /^Iphone/i }
        model : "Sony"
    }, {
        $set: {
            price : "£700"
        }
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Updated the item document");
        callback(result);
    });
}
const updateRandomCustomer = function(db,callback) {
    const collection = db.collection('customers');
    // Update random customer name to "NNN NNN" and email to "NNN@email.ie"
    collection.aggregate([{
        $sample: { size: 1 }
    }, {
        $set: {
          $and:[{
            fname: "NNN",
          },
          {
            lname: "NNN",
          },
          {
            email: "NNN@email.ie"
          }
          ]
        }
    }], function(err, result) {
        console.log("Updated the item document");
        callback(result);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------Remove Documents-----------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
const removeCustomer = function(db, callback) {
    const collection = db.collection('customers');
    // Delete document where fname is "Emma"
    collection.remove({
        fname: "Savannah"
    }, function(err, result) {
        console.log("Removed from customers");
        callback(result);
    });
}

const removeItem = function(db, callback) {
    const collection = db.collection('items');
    // Delete document where model is "Iphone X"
    collection.remove({
        model: "Iphone X"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Removed from items");
        callback(result);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------Retrieve Random Document-----------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
const findCustomer = function(db, callback) {
    const collection = db.collection('customers');
    //find random customer document
    collection.aggregate([{ $sample: { size: 1 } }]).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following random customer");
        console.log("Title: "+docs[0].Title+" | Name: " + docs[0].fname +" "+docs[0].lname + " | Email Address: "+docs[0].email+ " | Phone Number: "+ docs[0].mobile.phone);
        callback(docs);
    });
}
const findItem = function(db, callback) {
    const collection = db.collection('items');
    // Find random item
    collection.aggregate([{ $sample: { size: 1 } }]).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following random item");
        console.log("Manufacturer: "+docs[0].manufacturer+" | Model: " + docs[0].model +" | Price: "+docs[0].price);
        callback(docs);
    });
}

/*Database Design
Normalised Data model. Two collections, 'customers' and 'items' with the order details refrencing both collections,
embedding the item details into a field called orderDeatils.
Model was chosen because a customer typically only orders less than 5 items so time complexity will be quite low
*/
