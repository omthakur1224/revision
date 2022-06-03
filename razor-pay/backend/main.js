const express =require("express");
const mongoose= require("mongoose");
const mongoURI = require("./configs/db.js");
// const connect=require('./configs/db.js');
// const router=express.Router();
const app =express();
app.use(express.json());
app.use('/orders',require('./routers/orderRoute'))
app.use('/orders',require('./routers/orderRoute'))
// app.get('/',(req,res)=>{
//     res.send("hello ")
// })
let PORT=4444;
app.listen(PORT,()=>{
   try{
       mongoose.connect(mongoURI)
       console.log('connection established')
   }
catch(err){
    console.log("connection error")
}     
})