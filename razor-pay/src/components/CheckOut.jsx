import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function CheckOut() {
    const loc=useLocation();
    const {_id} = useParams();
    const [data,setData]=useState({});
    const getData=()=>{
        axios.get(`http://localhost:4444/orders/${_id}`)
        .then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData();
    },[])

    const handleClick=()=>{
        console.log("clicked")
        if(data.amount===""){
            alert("please provide amount")
        }
        else{
            var options={
                key:"rzp_test_vp6P6NnBDrbGnF",
                key_secret:"GcWMphBaeAtrS0hkWTlVGBhL",
                amount:data.amount*100,
                currency:"INR",
                name:"nothing",
                description:"any",
                handler:function (response){
                    alert(response.razorpay_payment_id);
                },
                prefill:{
                    name:"om",
                    email:"omthakur1224@gmail.com",
                    contact:"8988021422"
                },
                notes:{
                    address:"razorpay office"
                },
                theme:{
                    color:"#3399cc"
                    },
                }
                var pay=new window.Razorpay(options);
                pay.open();
        }
    }
  return (
    <div style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px", 
                    width: "600px",
                    height: "500px",
                    margin: "auto"
                }}>
        <img style={{width:"600px",height:"300px"}} src="data:image/jpeg;base64,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" alt="" />
        <h3> <span></span> Lorem ipsum dolor sit amet</h3>
        <p><span>Description:</span>Et earum quia officia aperiam animi, nostrum asperiores debitis distinctio quas corporis commodi unde? Nisi, vel maiores? Sunt laborum voluptatibus eveniet iste.</p>
         <h1><span>Price</span>&nbsp;&nbsp;{data.amount}</h1>
         <button onClick={handleClick}> Proceed to Checkout</button>
    </div>
  )
}

export default CheckOut
