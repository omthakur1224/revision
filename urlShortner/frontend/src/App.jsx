import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [data,setData]=useState({
    "urlCode":"",
    "longUrl":"",
    "shorUrl":"",
    "date":""
  });
  const [short,setShort]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/url/shorten',data)
    .then((res)=>{
        console.log("res.data",res.data);
       setShort(res.data.shortUrl);
    })
    .catch((err)=>{
      console.log("error",err)
    })
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
     <input type="text" name="" id="longUrl" placeholder='Enter long Url here' onChange={(e)=>{
       setData({
         [e.target.id]:e.target.value,
        })}}/>
     <input type="submit" />
      </form>
    <div> 
      <h5>Shor Url(copy the below link and paste in new tab)</h5>
      <div>{short}</div>
    </div>
    </div>
  )
}

export default App
