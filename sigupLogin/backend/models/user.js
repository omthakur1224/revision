const mongoose =require("mongoose");
const bcrypt = require('bcrypt');

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String, required:true}
})


userSchema.pre('save', function (next){
    if(!this.isModified("password")) return next();

    const hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    return next();
})

module.exports=mongoose.model('User',userSchema);