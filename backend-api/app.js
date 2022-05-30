const express = require("express");
const mongoose=require("mongoose")
const app = express();

// connection to database
const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://omthakur1224:om_123@cluster0.55but.mongodb.net/practice?retryWrites=true&w=majority"
        );
   }

// schemas creation
const userSchema= new mongoose.Schema({
    id:{type:Number, required:true},
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    contact:{type:Number,required:true}
})
//model genreation
let User;
try{
    User= mongoose.model("user",userSchema);//"user"changes to users by mongo we can write users or user bur write user only
}
catch(err){
    console.log(err)
}
// API to accessing data 

app.get("/users", async(req,res)=>{
    const users= await User.find().lean().exec();
    //we need json obj and find gives mongo obj so we can use .lean() to convert mongo obj to json
    // we will not get proper promise so mongo will return thenable promise 
    // we use .exec for thenable=>proper promise
    res.send(users)
})

// checking for connection or listning to changes 
app.listen(8080,async function(){
  try{
       await connect();
    console.log(" connection successful");
}
    catch(e){
        console.log("connection error")
    }
})