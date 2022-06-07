const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const User=require('../models/user.model');

// API to get all users
router.get('/', async(req,res)=>{
    try{
        const user= await User.find().limit(100)
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).send('creation request failed')
        }
    }
    catch(err){
        res.send(400).send("External error")
    }
})

// API to create new user
router.post('/create', async(req,res)=>{
    // console.log(req.body,"body")
    const user= await User.create(req.body)
    if(user){
        res.status(200).json(user);
    }
    else{
        res.status(404).send('creation request failed')
    }
    
})
//API to get particular user by id
router.get('/:id', async(req,res)=>{
    // console.log(req.params,"para")
    try{
        const user= await User.findOne({_id:req.params.id})
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).send('user not found')
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})

//API to update data
router.patch('/:id/edit', async(req,res)=>{
    console.log(req.body,"updatedbody")
    try{
        const user= await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).send('user not found')
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})

//API to get addresses
router.patch('/:id/addresses/edit', async(req,res)=>{
    // console.log(req.params.id,"updatedbody")
    try{
        const user= await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})
        if(user){
            // user.address={
            //     "vill":"dehrog",
            //     "po":"tikri"
            // }
            console.log(user,'address')
            res.send(user);
        }
        else{
            res.send('user not found')
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})

module.exports=router;