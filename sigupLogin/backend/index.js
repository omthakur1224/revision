const express = require("express");
const mongoose= require("mongoose");
const app=express();

app.use(express.json());


app.use('/',require('./routers/userRoutes'))


const port=9999;
const url="mongodb://0.0.0.0:27017/users";
app.listen(port,(req,res)=>{
    try{
        mongoose.connect(url,
        {useNewUrlParser:true,useUnifiedTopology:true} )
        console.log('connection done')
    }
    catch(err){
        console.log('error',error)
    }
})