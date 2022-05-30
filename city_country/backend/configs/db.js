const mongoose = require("mongoose");
const db=require("./db")
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://omthakur1224:om_123@cluster0.55but.mongodb.net/city?retryWrites=true&w=majority"
  );
};
module.exports = connect;