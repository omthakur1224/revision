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
      axios.delete(`http://localhost:5555/tasks/${id}`)
      .then((res)=>{
                  console.log("res",res.data)
                  dispatch(getData());
                  })
      }

      const handleIncrement=(id,count)=>{
        fetch(`http://localhost:5555/tasks/${id}`,
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
                fetch(`http://localhost:5555/tasks/${id}`,
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
        <div>
          {/* {process.env.REACT_APP_DBURL} */}
            {data.map((task,index)=>        
                <div  key={index} style={{ "display":"flex","justifyContent":"space-around"}}>

                    <span>{task.task}</span>

                      <div>
                          {/* count decrement button */}
                            <button 
                                  disabled={task.count>0?false:true}
                                  onClick={()=>{handleDecrement(task.id,task.count)
                                  }}>

                            -</button>
                            
                            <span>{task.count}</span>

                            {/* count increment button */}
                            <button onClick={()=>{handleIncrement(task.id,task.count)}}>+</button>

                      </div>

                      {/* task deletion button */}
                      <button onClick={()=>handleDelete(task.id)}>X</button>

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