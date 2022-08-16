let arr=[1,2,3,4,5];
let sum=10;
let  k=2;
let n=arr.length;

const sub_arr=(arr,n,k)=>{
  let ans=[];
  let count=0;
    for(let i=0;i<n-k;i++){
        let sum=0;
        for(let j=i;j<k+i;j++){
            sum+=arr[j];
        }
        if(sum<=5){
            count++;
        }
        ans.push(sum)
    }
    console.log(count)
return ans

    // for(let i=0;i<n;i++){
    //     let box=[];
    //     for(let j=i;j<n;j++){
          
    //         box.push(arr[j]);
    //     }
    //     console.log(box)
    // }
}

console.log(sub_arr(arr,n,k).join(" "))