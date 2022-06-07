import { useState } from 'react'
import './App.css'
import React from 'react';
import {Collapse,Checkbox} from "antd";
// import Checkbox from 'antd/lib/checkbox/Checkbox';

const {Panel}=Collapse;
const filters=[
    {
        "id":1,
        "name":'brand'
    },{
        "id":2,
        "name":'price'
    },{
        "id":3,
        "name":'rating'
    }
]
function App() {
  const [checked,setChecked]=useState([]);

  const handleChange=(value)=>{
      console.log("hello")
      const currIdx=checked.indexOf(value);
      const newChecked=[...checked];
      if(currIdx===-1){
          newChecked.push(value);
      }
      else{
          newChecked.splice(currIdx);
      }
      console.log(newChecked)
      setChecked(newChecked);

  }
  return (
  <div>
  <Collapse defaultActiveKey={[0]}>
      <Panel header key='1'>
         {
         filters.map((value,i)=>
          <React.Fragment key={i}>
              <Checkbox
              onChange={()=>handleChange(value.id)}
              type="checkbox"
              checked 
              />
              <span>{value.name}</span>
          </React.Fragment>
         )
         }

      </Panel>

  </Collapse>
  </div>
)
}

export default App
