const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String},
    mobile:{type:String,min:10,max:10,required:true},
    e_mail:{type:String,required:true},
    address:{type:String},
    password:{type:String,required:true},
})

const User=mongoose.model('User',userSchema);
module.exports=User;