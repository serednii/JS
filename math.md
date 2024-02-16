const factorial = (n)=>{
    let factorial=1;
    for(let i=n; i>0; i--){
        factorial*=i;
    }
    return factorial;
}
console.log(factorial(5))


    const factorialRecurse = (n,f)=>{
        if(n<=0)return f;
        else {
            n--;
            return factorialRecurse(n, f*(n+1));
        }
    }
    
console.log(factorialRecurse(10,1))
