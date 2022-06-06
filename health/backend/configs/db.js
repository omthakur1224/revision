const mongoose = require("mongoose")

const MongoUri="mongodb://0.0.0.0:27017/health"

const connect=()=>{
 let connection= mongoose.connect(MongoUri)
 if(connection){
    console.log("connection done")
}
else {
    console.log("connection failed")
    }
}

module.exports=connect;