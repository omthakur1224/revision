const express=require("express");
const connect = require("./configs/server");
const app=express();
app.use(express.json());
app.use('/',require('./routes/todoRoutes'))
app.listen(5555, async (req,res)=>{
     await connect();
        // .then((res)=>console.log("connection with mongo success")/)
})