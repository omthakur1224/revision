const express=require("express");
const connect = require("./configs/server");
const app=express();
app.use(express.json());
app.use('/',require('./routes/todoRoutes'))
const PORT=5555;
app.listen(PORT, async (req,res)=>{
     await connect();
             // .then((res)=>console.log("connection with mongo success")/)
             console.log(`server is running on ${PORT}`)
})