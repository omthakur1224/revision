const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

// API to get all Todos
router.get('/todos', async(req,res)=>{
    let page=req.query.page || 1;
    let pageSize=req.query.size || 5;
    // let Skip=req.body.page*pageSize;
    console.log("getting data from mongo")
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
    console.log(req.params,"para")
    try{
        const todo= await Todo.findByIdAndDelete(req.params.id).lean().exec()

        res.send(todo)
        if(err){
            return res.status(404).send('Todo not found');
        }
        else{
            return res.status(200).send({"status":"OK"});
        }
    }
    catch(err){
        res.send(400).send("External Error")
    }
    
})

//API to update data
router.patch('/:id', async(req,res)=>{
    console.log(req.body,"updatedbody")
    try{
        const Todo= await Todo.updateOne({_id:req.params.id},req.body,{new:true})
        
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


module.exports=router;