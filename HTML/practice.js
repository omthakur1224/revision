function num(x){
    return function(y){
        return function (z){
            return x*y*z;
        }
    }
}
console.log(num(2)(3)(4))