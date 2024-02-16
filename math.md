const factorial = (n)=>{
    let factorial=1;
    for(let i=n; i>0; i--){
        factorial*=i;
    }
    return factorial;
}
console.log(factorial(5))
