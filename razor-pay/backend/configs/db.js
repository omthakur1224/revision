const mongoose=require('mongoose')

const mongoURI ="mongodb://0.0.0.0:27017/razor";

// const connect = mongoose.connect(mongoURI
//       //   ,{
//       //   useNewUrlParser: true
//       // }
//       );

//      if(connect)  console.log('connection established...');
//       else console.log("error")
  
  module.exports = mongoURI;