// getting-started.js
const mongoose = require('mongoose'); //requring mongoose package

mongoose.connect('mongodb://localhost:27017/fruitsDB'); //local server + database name

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "The best fruit of all."
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 7,
  review: "Not too bad to eat, even the skin."
});

const grapefruit = new Fruit({
  name: "Grapefruit",
  rating: 0,
  review: "My least favourite fruit, really bad."
});

Fruit.insertMany([banana, kiwi, grapefruit], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("All fruits have been added to collection.")
  }
});





const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
}) //schema for fruits database

const People = mongoose.model('People', peopleSchema); //collection fruits for fruitsDB using fruitSchema

const people = new People({
  name: 'John',
  age: 37,
}); //adding new document to fruits collection in fruitsDB following fruitsSchema

// people.save();
//executing code
