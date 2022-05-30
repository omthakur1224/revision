const express = require("express");
const mongoose=require("mongoose");
const app=express();
// require('dotenv').config();
app.use(express.json())
// const db= process.env.connect;
// if(db){
//    mongoose.connect(db,{useNewUrlParser:true})
//     .then(()=>{
//         console.log("connection established");
//     })
//     .catch(()=>{
//         console.log("connection failed")
//     })
// }

app.listen(3404, async function(){
    try{
        await mongoose.connect();
        console.log("you are connected")
    }
    catch(err){
        console.log("connetion error")
    }
        
})
