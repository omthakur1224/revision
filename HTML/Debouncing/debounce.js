function debounce(fn,delay){
  var timer;
  return function(){
      var args=arguments;
      timer && clearTimeout(timer);
      timer=setTimeout(function (){
          timer=null;
          fn.apply(null,args);
      },delay)
  }
 };
 let num=document.getElementById('name').value;
 let counter=0;
function getData(){
   console.log("network call :-",counter++)
     
  }
  // document.getElementById('name').addEventListener()
  const debouncing=debounce(getData,500);