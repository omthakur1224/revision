const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const Todo=require('../models/todoModel');

// API to get all Todos
router.get('/todos', async(req,res)=>{
    let page=req.query.page || 1;
    let pageSize=req.query.size || 5;
    // let Skip=req.body.page*pageSize;
    try{
        const todo= await Todo.find()
        .skip((page-1)*pageSize).limit(pageSize);
        if(todo){
            res.status(200).send(todo);
        }
        else{
            res.status(404).send('creation request failed')
        }
    }
    catch(err){
        res.send(400).send("External error")
    }
})
// router.get('/', async(req,res)=>{
//     let page=req.query.page || 1;
//     let pageSize=req.query.size || 15;
//     try{
//         const Todo= await Todo.find().skip((page-1)*pageSize).limit(pageSize).lean().exec();
//         const totalPages=Math.ceil((await Todo.find().countDocuments())/pageSize);
//         if(Todo){
//             res.status(200).send({Todo,totalPages,pageSize});
//         }
//         else{
//             res.status(404).send('creation request failed')
//         }
//     }
//     catch(err){
//         res.send(400).send("External error")
//     }
// })

// API to create new Todo
router.post('/todos', async(req,res)=>{
    console.log(req.body,"body")
    const todo= await Todo.create(req.body)
    if(todo){
       return  res.status(200).json(todo);
    }
    else{
      return   res.sendStatus(404).send('creation request failed')
    }
    
})
//API to get particular Todo by id
router.delete('/:id', async(req,res)=>{
    // console.log(req.params,"para")
    try{
        const Todo= await Todo.DeleteOne({_id:req.params.id})
        if(Todo){
            res.status(200).json(Todo);
        }
        else{
            res.status(404).send('Todo not found')
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
        const Todo= await Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})
        if(Todo){
            res.status(200).json(Todo);
        }
        else{
            res.status(404).send('Todo not found')
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
        const Todo= await Todo.updateOne(myquery,req.body)

        return res.send(Todo)
            // if(Todo){
            //     // Todo.address={
            //     //     "vill":"dehrog",
            //     //     "po":"tikri"
            //     //}
            //     console.log(Todo,'address')
            //     return res.send(Todo);
            //     next();
                
            // }
            // else{                                                                                                       
            //     return  res.send('Todo not found')               
            // }
    }
        // query format findOneAndUpdate({search param},{updation},{new:true,upsert:true})     
    
    catch(err){
      return  res.send("External Error",err)
    }
    
})

module.exports=router;