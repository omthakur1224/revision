import axios from 'axios'
import React, { useEffect } from 'react'
import {Store} from '../redux/store.js'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, addTodo, nextPage, prevPage, reduceCount, getData, storeData} from '../redux/action';

function TodoList() {

  const dispatch = useDispatch();

  const page =useSelector((Store)=>Store.page);

  const data=useSelector((Store)=>Store.data);
  // console.log(`data`,data);
  
  useEffect(()=>{
     dispatch(getData());
      },[])

  const handleDelete=(id)=>{
      axios.delete(`http://localhost:5555/Todos/${id}`)
      .then((res)=>{
                  console.log("res",res.data)
                  dispatch(getData());
                  })
      }

      const handleIncrement=(id,count)=>{
        fetch(`http://localhost:5555/Todos/${id}`,
              {  

                    method: "PATCH",  

                    headers: {"Content-type": "application/json"}, 

                    body: JSON.stringify({count:count+1}

                )})
                .then(response => {

                                  // console.log(response.status); 

                                  return response.json();  
                                })  
                .then(data => {
                                //for getting updated data
                                dispatch(getData());
                                // console.log(data,"data")
                              });
              }


      const handleDecrement=(id,count)=>{
                fetch(`http://localhost:5555/Todos/${id}`,
                      {  
        
                            method: "PATCH",  
        
                            headers: {"Content-type": "application/json"}, 
        
                            body: JSON.stringify({count:count-1}
        
                        )})
                        .then(response => {
        
                                          // console.log(response.status); 
        
                                          return response.json();  
                                        })  
                        .then(data => {
                                        //for getting updated data
                                        dispatch(getData());
                                        // console.log(data,"data")
                                      });
                      }

    return (
        <div style={{"paddingTop":"10px"}} >
          {/* {process.env.REACT_APP_DBURL} */}
            {data.map((task,index)=>        
                <div  key={index} style={{ "display":"flex",
                "justifyContent":"space-between",
                "padding":"10px 10px 0px 10px",
               }}>

                    <span style={{"width":"50px",'textAlign':"left"}} >{task.task}</span>

                      <div>
                          {/* count decrement button */}
                            <button 
                                  style={{
                                    "outline":"none",
                                    "border":"none",
                                    "backgroundColor":"white",
                                    "fontSize":"30px"      
                                  }}
                                  disabled={task.count>0?false:true}
                                  onClick={()=>{handleDecrement(task.id,task.count)
                                  }}>

                            -</button>
                            
                            <span>{task.count}</span>

                            {/* count increment button */}
                            <button onClick={()=>{handleIncrement(task.id,task.count)}}
                                    style={{
                                      "outline":"none",
                                      "border":"none",
                                      "backgroundColor":"white",
                                      "fontSize":"30px"   
                                         
                                    }}>+</button>

                      </div>

                      {/* task deletion button */}
                      <button onClick={()=>handleDelete(task._id)}
                               style={{
                                "outline":"none",
                                "border":"none",
                                "backgroundColor":"white",
                                                      
                              }}> <img
                                       src="https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_262_icon-icons.com_61518.png" 
                                       alt=""
                                       style={{"width":"30px",
                                       "height":"40px"}} /> </button>

                </div>
            )}

                <button disabled={page<2?true:false} 
                        onClick={()=>{
                                  dispatch(prevPage(1));
                                  dispatch(getData());
                                }}
                >Prev </button>

                <span>{page}</span>

                <button disabled={data.length<5?true:false} 
                        onClick={()=>{
                                  dispatch(nextPage(1));
                                  dispatch(getData());
                                }}
                >Next</button>
          </div>
       )
}
export default TodoList