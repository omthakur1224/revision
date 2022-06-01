import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactDeleteRow from 'react-delete-row';
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([]);

  const getData=()=>{
   axios.get('http://localhost:8080/add-countries')
   .then((res)=>{
     console.log(res.data);
     setData(res.data);
   })
  }
  useEffect(() => {
    getData();
  }, [])
  const handleDelete=(e)=>{
    console.log(e)
    // axios.delete('http://localhost:8080/add-contries')
    // .then((res)=>{
    //   setData(res.data);
    // })
  }

  const handleEdit=(e)=>{
    console.log(e)
  }

  return (
   <>
      <div style={{
            display:"flex",
            justifyContent:"space-around",
            marginTop:"20px"
          }}>
          <button >id</button>
          <button>country</button>
          <button>city</button>
          <button>population</button>
          <button>edit</button>
          <button>delete</button>
      </div>
      <div>

      </div>
      {data.map((e)=>{
        
      })}
   </>
  );
  
}

export default App
