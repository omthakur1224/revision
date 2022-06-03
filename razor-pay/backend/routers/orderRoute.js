const express=require('express');
const Order = require('../models/order.model');
const router=express.Router();
// router.post('/create',)
router.post('/create',async(req,res,err)=>{
    try{
        const order= await Order.create({
            "amount": req.body.amount,
            "amount_paid": "",
            "amount_due":req.body.amount_due,
            "currency":"",
            "receipt":""
      })
        if(order){
          return  res.json(order)
        }
        else{
         return   res.send("order fail")
        }
    }
    catch(err){
       return res.send("Enter valid amount")
    }
})

router.get("/:id",async(req,res,err)=>{
  try{
      const product= await Order.findOne(req.params)
      if(product){
        return  res.send(product)
      }
      else{
       return   res.send("product fail")
      }
  }
  catch(err){
     return res.send("product failed")
  }
})
module.exports=router;