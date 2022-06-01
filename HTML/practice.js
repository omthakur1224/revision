function num(x){
    return function(y){
        return function (z){
            return x*y*z;
        }
    }
}
console.log(num(2)(3)(4))
var names=['a','b','c'];
// names[-1]=8
console.log(names[-1]);//undefined

var num=15;
console.log(num.toString(2))//return 1111 because of binary conversion base 2
console.log(num.toString(3))//return 120 because base is 3 conversion of 15 in base 3 is 120