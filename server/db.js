const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = 'mongodb+srv://sumit:Sumit123@cluster0.j1ozsum.mongodb.net/test';

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("Express.js: Connected to MongoDB");
  });
};

module.exports = connectToMongo;