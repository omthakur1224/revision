let count=0;
const getData=()=>{
    console.log("throttle",count++);
    document.getElementById('debounce').innerHTML=count;
}

let timer;
function throttle(fn,delay){
    let args=arguments;

    return function(){
          if(timer){
              return;
         }
        timer=setTimeout(()=>{
            timer=null;
            fn.apply(null,args)
        },delay)
    }
}
const throttling=throttle(getData,1000);
