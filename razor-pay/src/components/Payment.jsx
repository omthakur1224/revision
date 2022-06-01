import React from 'react'

function Payment() {
  return (
    <>
    <div>
    <h1 id='h1'>100</h1>
    </div>

   

    <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_Jc60UfB4iAKbfO/view" data-text="Pay Now" data-color="#528FF0" data-size="large">
    <script>
     { (function(){
       
        var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
        // let h=d.getElementById('h1')
        if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
        // s.innnerHTML='h.value'
        s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
        rzp && rzp.init && rzp.init()}})()}
    </script>
  </div>
      </>
  )
}

export default Payment
