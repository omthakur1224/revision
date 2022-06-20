const mongoose=require('mongoose');

const Todos=mongoose.Schema({
    task:{type:String,required:true},
    status:{type:Boolean,default:false},
    count:{type:Number,default:1}
})

const Todo=mongoose.model('Todos',Todos)
module.exports=Todo;