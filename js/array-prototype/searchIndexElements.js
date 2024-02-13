


//В не сортованому масиві  шукає індекси однакових елементів 
//і повертає масив arrayIndexElements з найденими елементами
//На вхід приймає елемент який шукаємо
//На вихід повертає масив з індексами
//Якщо нічого незнайдемо повертає пустий масив
if (!Array.prototype.searchIndexElements) {
    Array.prototype.searchIndexElements = function (searchElement) {
        let findIndex = -1;
        const arrayIndexElements = [];//масив для індексів
        do {
            findIndex = this.indexOf(searchElement, findIndex + 1)
            if (findIndex >= 0) {
                arrayIndexElements.push(findIndex);
            }
        } while (findIndex >= 0)
        return arrayIndexElements
    }
}


//В не сортованому масиві  шукає індекси однакових елементів 
//і повертає масив arrayIndexElements з найденими елементами
//На вхід приймає елемент який шукаємо
//На вихід повертає масив з індексами
//Якщо нічого незнайдемо повертає пустий масив
export function searchIndexElements(array, searchElement) {
    let findIndex = -1;
    const arrayIndexElements = [];
    do {
        findIndex = array.indexOf(searchElement, findIndex + 1)
        if (findIndex >= 0) {
            arrayIndexElements.push(findIndex);
        }
    } while (findIndex >= 0)
    return arrayIndexElements
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 18, 20, 23, 23, 28, 30, 35, 38, 40, 41, 55, 60, 120, 125, 800, 900, 2000];
const rez = sortedArray.searchIndexElements(23);
console.log(rez)