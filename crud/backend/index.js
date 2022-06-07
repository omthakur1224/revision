const express=require('express');

const connect=require('./configs/db')
const app=express();
app.use(express.json());

app.use('/users',require('./routers/user.route'))
const port=8888;
app.listen(port,(req,res)=>{
    connect();
    // console.log("connection success");
})