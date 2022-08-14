
let str="omprakash";
    let start=0;
    let count=0;

    for(let i=1;i<=str.length;i++){
        
        let box="";
        box+=str.substring(start,i);
        count++;
        console.log(`start-${start}`,`and i-${i}`, `\n \t${box}`,count);
}

const ar  = [1, 2, 3, 4, 5];

// slice from 1..3 - add 1 as the end index is not included

const ar2 = ar.slice(1, 3 + 1);

console.log(ar2);