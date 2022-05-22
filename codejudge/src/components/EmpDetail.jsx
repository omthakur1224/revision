import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const EmpDetail = () => {
    const [data,setData]=useState([]);
    const [select,setSelect]=useState([]);
    const [text,setText]=useState({})
    
  //handling select input and filteration process
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setText({
          ...text,
          [id]:value
        })
        var filteredData;
        if(id==='role-filter'){
         filteredData=data.filter((e)=>e.role.includes(value));
         }
         if(id==="technology-filter"){
           
           filteredData=data.filter((e)=>e.technology.includes(value));
         }
         if(id==='experience-filter'){
           filteredData=data.filter((e)=>e.experience.includes(value));
          }
          if(id==='role-filter'){
            if(id==="technology-filter"){
                filteredData=data.filter((e)=>e.technology.includes(value));
            }
            }
          console.log("filter",filteredData)
          setSelect(filteredData);
          console.log(value);
    }
  // api function
    const getData=()=>{
      axios.get("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json")
      .then((res)=>{
        setData(res.data.data);
        setSelect(res.data.data);
        console.log(res.data.data)
      })
    }
  
    //handling api call
    useEffect(()=>{
      getData();
    },[]);
  
    return (
      <>
          <div style={{margin:"auto",width:"95%",marginTop:"20px",display:"flex",justifyContent:"space-between",}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label >JOB ROLE</label>
                <select onChange={handleChange} id='role-filter'  style={{width:250,height:25}}>
                  <option value="Select Role">Select Role</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Fullstack">Fullstack</option>
                </select>
            </div>
           
          <div style={{display:"flex",flexDirection:"column"}}>
            <label >TECHNOLOGY</label>
              <select onChange={handleChange} id='technology-filter' style={{width:250,height:25}}>
                <option value="Technology">Technology</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Angular">Fullstack</option>
                <option value="HTML">HTML</option>
                <option value="Django">Django</option>
                <option value="Python">Python</option>
                <option value="NodeJs">NodeJs</option>
                <option value="MONGODB">MONGODB</option>
                <option value="SQL">SQL</option>
                <option value="TypeScript">TypeScript</option>
                <option value="ExpressJS">ExpressJS</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
              </select>
            </div>
         <div style={{display:"flex",flexDirection:"column"}}>
            <label >EXPERIENCE</label>
                <select onChange={handleChange} id='experience-filter' style={{width:250,height:25}}>
                  <option value="Experience">Experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Midweight">Midweight</option>
                </select>
         </div>
        
          </div>
  
          <div className='job-list' style={{margin:"auto",marginTop:"20px",width:"80%",height:"100vh",}}>
  
          {
            select.map((e)=>
                  <div key={e.id} className={`job-list-${e.id}`} style={{display:"flex",marginBottom:"20px", boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
                    <div style={{display:"flex" , gap:"20px"}}>
                      <div style={{margin:"auto",marginLeft:"20px"}}> <img src={e.logo} alt="" /></div>
                          <div style={{display:"flex",flexDirection:"column",margin:"auto",gap:"0"}}>
                            <ul style={{color:"blue",fontSize:"30px"}}>{e.company}</ul>
                            <ul style={{color:"red",fontSize:"25px"}}>{e.position}</ul>
                            <div style={{display:"flex"}}>
                              <ul>{e.experience}</ul>
                              <ul>|</ul>
                              <ul>{e.contract}</ul>
                              <ul>|</ul>
                              <ul>{e.location}</ul>
                            </div>
                        </div>
                     
                    </div>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                       {e.technology.map((t,index)=>
                       <ul key={index}>{t}</ul>
                       )}
                       <ul>{e.ctc}-LPA</ul>
                    </div>
                  </div>
            )
          }
  
          </div>
      </>
    );
}

export default EmpDetail
