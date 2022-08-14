// TASK 1: 
// Description - We are required to write a JavaScript function that takes in a 
// string that might contain some spaces.
// Our function should reverse the words present in the string internally without 
// interchange the characters of two separate words or the spaces.
// Input : this is normal string
// Output: gnir ts lamron sisiht

let str="this is normal string";
str=str.split(" ")
let ans=[];
let arr=""
for(let i=str.length-1;i>=0;i--){
    let box="";
    for(let j=str[i].length-1;j>=0;j--){
        box+=str[i][j];
    }
    ans.push(box);
}

console.log(ans.join(" "));
// console.log(ans=ans.join('').toString())
// ans=ans.split("")
// console.log(str=str.join(""))
// for(let i=0;i<str.length;i++){
//     let count=0;
//     for(let j=0;j<str[i].length;j++){
//         count++;
//     }
//     ans.splice(count,0," ")
//     // ans[count].split(" ")
// }
// console.log(ans=ans.join(""))