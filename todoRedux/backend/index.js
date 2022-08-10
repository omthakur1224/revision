const express=require("express");
const connect = require("./configs/server");
const cors= require("cors")
const app=express();
app.use(cors())
app.use(express.json());

app.use('/',require('./routes/todoRoutes'))
app.use('/todos',require('./routes/todoRoutes'))
// app.use('/Todos',require('./routes/todoRoutes'))
const PORT=5555;
app.listen(PORT, async (req,res)=>{
     await connect();
             // .then((res)=>console.log("connection with mongo success")/)
             console.log(`server is running on ${PORT}`)
})