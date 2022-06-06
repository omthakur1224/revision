const mongoose = require("mongoose")

const MongoUri="mongodb://localhost:27017"

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