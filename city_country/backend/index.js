const express = require("express");
const connect=require("./configs/db");
const { addCountry } = require("./controllers/country");
const app=express();

app.use(express.json());

app.post('/add-city',(req,res)=> { addCountry});
app.post('/add-country',(req,res)=> { addCountry});
app.listen(3404, async function(){
 
   try{
        await connect();
        console.log("you are connected")
    }
    catch(err){
        console.log("connetion error")
    }
        
})
