const mongoose=require('mongoose');

const Todos=mongoose.Schema({
    task:{type:String,required:true},
    status:{type:Boolean,default:false},
    count:{type:Number,default:1}
})


module.exports= mongoose.model('Todos',Todos)