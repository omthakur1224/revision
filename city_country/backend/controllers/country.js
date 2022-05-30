const express=require('express');
const Countries = require('../models/createCity');
const router=express.Router()

router.post("", async (req,res,err)=>{
    try{
    // const country = await Countries.create({
    //     name:req.body.name,
    //     city:[
    //         req.body.city.map((e)=>{ e.city,e.population})
    //     ]
    // })
    const country=await Countries.create(req.body)
    if(country){
        return res.status(201).json(country)
    }
    else{
        return res.status(400).json({"satatus":"unsuccessful"})
    }
}
catch(err){
    console.log("data is not added")
}
})


module.exports=router;