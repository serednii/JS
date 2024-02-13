

Array.prototype.binaryIndex = function (elementSearch) {

    // debugger
    const arrayIndexElements = [];

    //Пошук індекса елемента бінарним способом
    const searchElement = (startArray, endArray) => {
        if (startArray > endArray) {
            return -1; // Нічого незнайдено
        }
        const halfArray = Math.floor((startArray + endArray) / 2);
        const currentElement = this[halfArray];


        if (typeof currentElement === 'number' && typeof elementSearch == 'number') {
            if (currentElement === elementSearch) {
                return halfArray; // Знайдено елемент, повертаємо індекс
            } else if (currentElement > elementSearch) {
                // Шукати в лівій половині
                return searchElement(startArray, halfArray - 1);
            } else {
                // Шукати в правій половині
                return searchElement(halfArray + 1, endArray);
            }
        } else if (typeof currentElement === 'string' && typeof elementSearch == 'string') {
            if (currentElement.toLocaleLowerCase() === elementSearch.toLocaleLowerCase()) {
                return halfArray; // Знайдено елемент, повертаємо індекс
            } else if (currentElement.toLocaleLowerCase() > elementSearch.toLocaleLowerCase()) {
                // Шукати в лівій половині
                return searchElement(startArray, halfArray - 1);
            } else {
                // Шукати в правій половині
                return searchElement(halfArray + 1, endArray);
            }
        } else {
            throw new TypeError('The data types do not match, or the string or number does not appear');
        }
    }

    //Пошук індексів елементів після найденого індекса
    const searchNextElement = (searchIndex) => {
        searchIndex++;
        if (searchIndex <= this.length - 1 && this[searchIndex] === elementSearch) {
            arrayIndexElements.push(searchIndex)
            return searchNextElement(searchIndex)
        } else {
            return
        }
    }

    //Пошук індексів елементів перед найденним індексом
    const searchPrevElement = (searchIndex) => {
        searchIndex--;
        if (searchIndex >= 0 && this[searchIndex] === elementSearch) {
            arrayIndexElements.unshift(searchIndex)
            return searchPrevElement(searchIndex)
        } else {
            return
        }
    }

    const searchIndex = searchElement(0, this.length - 1);

    arrayIndexElements.push(searchIndex)
    if (searchIndex >= 0) {
        searchPrevElement(searchIndex);
        searchNextElement(searchIndex);
    }

    return arrayIndexElements
}
//---------------------------------------------------

let arrString = "The shift() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the first element removed, you can use arr.slice(1) instead The shift() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable."
const arr1 = arrString.split(' ')

console.log(arr1)
arr1.sort((a, b) => {
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase())
        return 1
    else if (a.toLocaleLowerCase() < b.toLocaleLowerCase())
        return -1
    else return 0
})

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 18, 20, 23, 23, 28, 30, 35, 38, 40, 41, 55, 60, 120, 125, 800, 900, 2000];
console.log(arr1.binaryIndex('is')); // Виведе: 3


// Array.prototype.myBinaryIndex = function (elementSearch) {
//     // debugger
//     const half = (number) => Math.floor((number) / 2);
//     let halfArray = half(this.length - 1);
//     let searchIndex;
//     const arrayIndexElements = [];

//     //Пошук індекса елемента бінарним способом
//     const searchElement = (halfArray, startArray, endArray) => {
//         // console.log(`${halfArray}  ${startArray}  ${endArray}`);

//         if (this[halfArray] === elementSearch) {
//             searchIndex = halfArray;
//             return halfArray; //коли дорівнює повертаємо індекс
//         } else if (this[endArray] === elementSearch) {
//             searchIndex = endArray
//             return endArray; //коли дорівнює повертаємо індекс
//         } else if (this[halfArray] > elementSearch) {//До низу
//             if (halfArray === startArray || startArray + 1 === endArray) {
//                 searchIndex = -1;
//                 return -1;//Нічого незнайдено
//             }
//             searchElement(startArray + half(halfArray - startArray), startArray, halfArray);
//         } else if (this[halfArray] < elementSearch) {//на гору
//             if (halfArray === startArray || startArray + 1 === endArray) {
//                 searchIndex = -1;
//                 return -1;//Нічого незнайдено
//             }
//             const tempHalf = halfArray + half(endArray - halfArray);
//             searchElement(tempHalf, halfArray, endArray);
//         } else {
//             searchIndex = -1;
//             return -1;//Нічого незнайдено
//         }
//     }
//     //Пошук індексів елементів після найденого індекса
//     const searchNextElement = (searchIndex) => {
//         searchIndex++;
//         if (searchIndex <= this.length - 1 && this[searchIndex] === elementSearch) {
//             arrayIndexElements.push(searchIndex)
//             searchNextElement(searchIndex)
//         } else {
//             return
//         }
//     }
//     //Пошук індексів елементів перед найденним індексом
//     const searchPrevElement = (searchIndex) => {
//         searchIndex--;
//         if (searchIndex >= 0 && this[searchIndex] === elementSearch) {
//             arrayIndexElements.unshift(searchIndex)
//             searchPrevElement(searchIndex)
//         } else {
//             return
//         }
//     }

//     const r = searchElement(halfArray, 0, this.length - 1);
//     console.log(r)
//     arrayIndexElements.push(searchIndex)
//     if (searchIndex >= 0) {
//         searchPrevElement(searchIndex);
//         searchNextElement(searchIndex);
//     }

//     return arrayIndexElements
// }

