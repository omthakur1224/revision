const express=require('express');
const router=express.Router();
const Medicine=require('../models/med')
router.get('/medicines',async(req,res)=>{
    const data= await Medicine.find().limit(5)
    if(data){
        // console.log(data)
        return res.json(data).send();
    }
    else{
        console.log("Data fetching error")
    }
})

module.exports=router;