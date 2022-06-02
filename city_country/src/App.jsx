import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import './components/Table.css'
import ReactDeleteRow from 'react-delete-row';
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([]);

  const getData=()=>{
   axios.get('http://localhost:8888/add-country')
   .then((res)=>{
     console.log(res.data);
     setData(res.data);
   })
  }
  useEffect(() => {
    getData();
  }, [])
  // const handleDelete=(e)=>{
  //   console.log(e)
  //   axios.delete('http://localhost:8080/add-country')
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  // }

  const handleEdit=(e)=>{
    console.log(e)
  }

  return (
   <>
    <table style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
     
      <tr className='row'>
        <th>ID</th>
        <th>COUNTRY</th>
        <th>CITY</th>
        <th>POPULATION</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>

  {
    data.map((country)=>
      <tr className='row' key={country.id}>
         <td>{country.id}</td>
         <td>{country.name}</td>
         <td>{country.city[0].city}</td>
         <td>{country.city[0].population}</td>
         <button>Edit</button>
         <button>Delete</button>
      </tr>
     
    )
  }

    </table>
      {/* <div style={{
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
        
      })} */}
   </>
  );
  
}

export default App
