const { default: mongoose } = require('mongoose');
const mogoose=require('mongoose');

const medicineSchema= new mongoose.Schema({
    company:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String},
    code:{type:String,required:true},
    brand:{type:String,required:true},
    image:{type:String,required:true},
    procedure:{type:String},
    price:{type:Number,required:true},
})

const Medicine= mongoose.model("Medicine",medicineSchema);

module.exports=Medicine;