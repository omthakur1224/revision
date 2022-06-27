import { legacy_createStore as createStore , applyMiddleware} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import axios from 'axios'
var Data=[];
var page;

// const getData=()=>{
//   axios.get(`http://localhost:5555/tasks?_page=${page}&_limit=5`)
//   .then((res)=>{
//     console.log("res",res.data)
//        for(let i=0;i<res.data.length;i++){
//       Data.push(res.data[i]);
//     }
//     // return res.data
//   })
//   }
//  getData();
export const initState=
{
    todos:[],
    // counter:0,
    page:1,
    data:[],
    // getData:getData()
  }
  // console.log(`data`,Data);
// useEffect(()=>{
//     getData();
//   },[])
  


export const Store=createStore(reducer,initState,applyMiddleware(thunk));

console.log(Store.getState(),"daata")
Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})
