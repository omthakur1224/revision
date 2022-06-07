const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const User=require('../models/user.model');

// getting user
router.get('/', async(req,res)=>{
    const user= await User.find()
    if(user){
        res.status('200').json(user);
    }
    else{
        res.status('400').send('creation request failed')
    }
})

router.post('/create', async(req,res)=>{
    console.log(req.body,"body")
    const user= await User.create(req.body)
    if(user){
        res.status('200').json(user);
    }
    else{
        res.status('400').send('creation request failed')
    }
    
})


module.exports=router;