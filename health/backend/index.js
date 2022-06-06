const express=require('express');
const connect=require('./configs/db')
const app=express();
app.use(express.json());
app.use('/',require('./routers/medRoute'))
const port=8090;
app.listen(port,(req,res)=>{
    connect();
    console.log("connected")
})