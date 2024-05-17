

function getVariant(n) {


    if (n <= 1) return n
    if (n > 1) {
        let prev = 0;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            [prev, current] = [current, current + prev]
        }
        return current
    }



    // if (n <= 2) {
    //     return n;
    // } else {
    //     return getVariant(n - 1) + getVariant(n - 2);
    // }
    // if (n === 0) return obj.current
    // if (obj.prev === 0) {
    //     return getVariant(n - 1, obj)
    // } else {
    //     [obj.prev, obj.current] = [obj.current, obj.prev + 1]
    //     return getVariant(n - 1, obj)
    // }
    // function fibonacci(n) {

    // }




    // for (let i = 1; i <= n; i++) {
    //     if (i == 1) {
    //         values[i] = 1;
    //     } else if (i == 2) {
    //         values[i] = 2
    //     } else {
    //         values[i] = values[i - 1] + values[i - 2];
    //     }
    // }
    // return values[n]
}


console.log(getVariant(100))
// for (let i = 0; i < 50; i++)
//     console.log(`${i}  ${2 ** i} ${getVariant(i)}`)

