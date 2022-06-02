const mongoose=require("mongoose");
const express=require("express");
const Countries = require("../models/addCountry");

const router=express.Router();

router.update('/',async(req,res,err)=>{
    
    const City= await Countries.findByIdAndUpdate(req.params.id,req.body,{useModifyAndUpdate:false})
    .then((res)=>{
        if(res){
            return res.status(201).json(City);
        }
        else{
            return res.status(400).send("error");
        }
       
    })
    .catch((err)=>{
        return res.status(500).send("error")
    })
})
