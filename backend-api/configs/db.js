const mongoose=require("mongoose")
const connect = ()=>{
  return 
  mongoose.connect("mongodb+srv://omthakur1224:om_123@cluster0.55but.mongodb.net/practice?retryWrites=true&w=majority")
 }