const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({
    "amount": {type: Number,required: true},
    "amount_due": {type: Number,required: true},
    "amount_paid": {type: Number,default: 0},
    "currency": {type: String,default: "INR"},
    "receipt": {type:Number,default: Math.floor(Math.random()*(1000-1+1)+1)}
      }, {timestamps:true})

      const Order=mongoose.model('Order',orderSchema)
    module.exports=Order;
// {
//     id: order_DaZlswtdcn9UNV,
//     entity: order,
//     amount: 50000,
//     amount_paid: 0,
//     amount_due: 50000,
//     currency: INR,
//     receipt: Receipt #20,
//     status: created,
//     attempts: 0,
//     notes:  {
//       key1:  value1,
//       key2:  value2,
//     created_at: 1572502745
//   }