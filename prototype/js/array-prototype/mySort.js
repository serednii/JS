
Array.prototype.mySort = function (compareFunction) {
    let counter = 0;
    for (let i = 0; i < this.length - 1; i++) {
        let isReplacement = false;
        for (let k = 0; k < this.length - 1 - i; k++) {
            // console.log(`${k}  ${k + 1}`)
            counter++;
            if (compareFunction ? compareFunction(this[k], this[k + 1]) > 0 : this[k] > this[k + 1]) {
                const temp = this[k];
                this[k] = this[k + 1];
                this[k + 1] = temp;
                isReplacement = true;
            }
        }
        if (!isReplacement) break;
    }
}


let arrString = "The shift() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the first element removed, you can use arr.slice(1) instead The shift() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable."
const arr1 = arrString.split(' ')

console.log(arr1)
arr1.mySort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase())
        return 1
    else if (a.toLocaleLowerCase() < b.toLocaleLowerCase())
        return -1
    else return 0
})
console.log(arr1)





