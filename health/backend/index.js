const express=require('express');
const app=express();
const connect=require('./configs/db')

const port=8090;
app.listen(port,(req,res)=>{
    connect();
    console.log("connected")
})