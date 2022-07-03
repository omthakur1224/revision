const express=require('express');
const User =require('../models/user')
const router=express.Router();

router.post('/users', async(req,res)=>{
    try{

        let user= await User.findOne({email:req.body.email}).lean().exec();

        if(user){
            return res.status(400).send("try another email this is already exist")
        }

        user = User.create(req.body)
        
        return res.status(200).send(user)
    }
    catch(err){
        res.send("user not created controller error")
    }
})






module.exports=router;