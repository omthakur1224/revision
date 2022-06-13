const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const User=require('../models/user.model');

// API to get all users
router.get('/', async(req,res)=>{
    let page=req.query.page || 1;
    let pageSize=req.query.size || 15;
    try{
        const user= await User.find().skip((page-1)*pageSize).limit(pageSize).lean().exec();
        const totalPages=Math.ceil((await User.find().countDocuments())/pageSize);
        if(user){
            res.status(200).send({user,totalPages,pageSize});
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
router.patch('/:id/addresses/edit', async(req,res,err)=>{
    console.log(req.body,"updatedbody")
    console.log(req.params,`param`);
    let myquery=req.params.id;
    let newquery={$push:{address:req.body}}
    try{
        const user= await User.updateOne(myquery,newquery,{new:true})

        return res.send(user)
            // if(user){
            //     // user.address={
            //     //     "vill":"dehrog",
            //     //     "po":"tikri"
            //     //}
            //     console.log(user,'address')
            //     return res.send(user);
            //     next();
                
            // }
            // else{
            //     return  res.send('user not found')               
            // }
    }
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})     
    
    catch(err){
      return  res.send("External Error",err)
    }
    
})

module.exports=router;