let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < array.length) {
                const rezult = { value: array[nextIndex], done: false }
                nextIndex++;
                return rezult;
            } else {
                return { done: true }
            }

        }
    }

}

const iter = makeIterator(users);
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
