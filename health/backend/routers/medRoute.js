const express=require('express');
const router=express.Router();
const Medicine=require('../models/med')
router.get('/medicines',async(req,res)=>{
    console.log(req);
    
    let order=req.body.order?req.body.order:"desc";
    let sortBy=req.body.sortBy?req.body.sortBy:"id";
    let limit=req.body.limit?parseInt(req.body.limit):100;
    let skip=parseInt(req.body.skip);

    // const data= 
    await Medicine.find()
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,medicines)=>{
        if(err){
            // console.log(data)
            return res.status(400).json({"success":false,err});
        }
        else{
            res.status(200).json({success:true,medicines,pageSize:medicines.length})
        }
    })
})

module.exports=router;