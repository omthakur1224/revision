const mongoose = require("mongoose");

const MONGOURL="mongodb://0.0.0.0:27017/Todos"

const connect=()=>{
    try{

        mongoose.connect(MONGOURL,{useNewUrlParser:true,useUnifiedTopology: true})
        // .then((res)=>{console.log("you are connected with mongo")})
        console.log(`you are connected with server`);
    }
    catch(err){
        console.log(`error with mongo connetion`);
    }
}
module.exports=connect;