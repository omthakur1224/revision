const mongoose=require('mongoose');

//city schema
const city= new mongoose.Schema({
     "city":{type:String,required:true},
     "population":{type:Number,required:true}
})

//nesting city inside country
const country = new mongoose.Schema({
    "name":{type:String,required:true},
    "city":[city]
})

const Countries= mongoose.model('countries',country);

module.exports=Countries