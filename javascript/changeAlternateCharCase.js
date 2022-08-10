let str="rDaBfS"
str=str.split("")
str.sort((a,b)=>a.localeCompare(b))
// console.log(str);
for(let i=0;i<str.length;i++){
    if(i%2===0){
        
        str[i]=str[i].toLowerCase();
    }
    else {
        str[i]=str[i].toUpperCase();
    }
}
console.log(str.join(""))