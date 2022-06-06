const express=require('express');
const router=express.Router();

router.get('/medicines',(req,res)=>{
    const data=Medicine.find().exec().lean()
    if(data){
        return res.json();
    }
    else{
        console.log("Data fetching error")
    }
})

module.exports=router;