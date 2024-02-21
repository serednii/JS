## Массив частичных сумм
На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

```sh
const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const getSums = (arr)=>{
    return newArr = arr.reduce((a,v,i)=>{
        a.push(!!i ? (a[i-1] + v) : v);
        return a;
    }
    ,[]);
    }
  
  console.log(getSums(arr))
```

# Ініціали прізвища і імя
Повернути строку яка буде вміщувати ініціали імені з великої букви і в кінці кожної букви крапка
```sh
const getInitial = (names :string) => {
    // return names.split(' ').map((e) => e[0].toUpperCase() + '.').join('')
    return names.split(' ').map((e) => e[0]).join('.').toUpperCase() + '.'

}

console.log(getInitial('kostik Loyko'))
```

# Palindrome
```sh
const isPalindrome = (word) => {
    return word === word.split('').reverse().join('')
}

const rez = isPalindrome('radar')
console.log(rez)
```

# пошук найкоротшого слова в тексті

'''sh
const str = `I live in Algeria, the biggest country in Africa. In Algeria the distance between a city in the North and another city in the south is much more tall than the distance between Algeria's north and France, so for far destinations in Algeria, I usually take a plane.
In the last summer, I visited Tunisia, using my own car.
In Autumn, 2019, I traveled to Croatia, by plane. It was an amazing excursion.
I'm the kind of person who likes to travel around the world. but there are lots of circumstances, like visa requirements for some countries, and airplane tickets being expensive.
Countries of North America and East Asia are definitely worth visiting.
I live in Algeria, the biggest country in Africa. In Algeria the distance between a city in the North and another city in the south is much more tall than the distance between Algeria's north and France, so for far destinations in Algeria, I usually take a plane.
In the last summer, I visited Tunisia, using my own car.
In Autumn, 2019, I traveled to Croatia, by plane. It was an amazing excursion.
I'm the kind of person who likes to travel around the world. but there are lots of circumstances, like visa requirements for some countries, and airplane tickets being expensive.
Countries of North America and East Asia are definitely worth visiting.
I live in Algeria, the biggest country in Africa. In Algeria the distance between a city in the North and another city in the south is much more tall than the distance between Algeria's north and France, so for far destinations in Algeria, I usually take a plane.
In the last summer, I visited Tunisia, using my own car.
In Autumn, 2019, I traveled to Croatia, by plane. It was an amazing excursion.
I'm the kind of person who likes to travel around the world. but there are lots of circumstances, like visa requirements for some countries, and airplane tickets being expensive.
Countries of North America and East Asia are definitely worth visiting.
I live in Algeria, the biggest country in Africa. In Algeria the distance between a city in the North and another city in the south is much more tall than the distance between Algeria's north and France, so for far destinations in Algeria, I usually take a plane.
In the last summer, I visited Tunisia, using my own car.
In Autumn, 2019, I traveled to Croatia, by plane. It was an amazing excursion.
I'm the kind of person who likes to travel around the world. but there are lots of circumstances, like visa requirements for some countries, and airplane tickets being expensive.
Countries of North America and East Asia are definitely worth visiting.
I live in Algeria, the biggest country in Africa. In Algeria the distance between a city in the North and another city in the south is much more tall than the distance between Algeria's north and France, so for far destinations in Algeria, I usually take a plane.
In the last summer, I visited Tunisia, using my own car.
In Autumn, 2019, I traveled to Croatia, by plane. It was an amazing excursion.
I'm the kind of person who likes to travel around the world. but there are lots of circumstances, like visa requirements for some countries, and airplane tickets being expensive.
Countries of North America and East Asia are definitely worth visiting.`

 За допомогою сортіровки час виконання 100000 циклів = 6668ms
const getShortWord = (string) => {
    return string.split(' ').sort((a, b) => a.length - b.length)[0];
}

 Способом одноразового проходу по циклу час виконання 100000 циклів = 93ms
const getShortWord = (string) => {
     let minNumber = 1000; // найкоротша довжина слова
     let minWord = ''; // найкоротше слово
     const arrStr = string.split(' ');
     for (let i = 0; i < arrStr.length; i++) {
         if (arrStr[i].length < minNumber) {
             minNumber = arrStr[i].length;
             minWord = arrStr[i];
         }
     }
     return [minNumber, minWord]
}
Способом одноразового проходу по циклу, з умовою , якщо слово  == 1 символу то ми виходимо час виконання 100000 циклів = 9ms
const getShortWord = (string) => {
    return string.split(' ').sort((a, b) => a.length - b.length)[0];
     let minNumber = 10000;
     let minWord = '';
     const arrStr = string.split(' ');
     for (let i = 0; i < arrStr.length; i++) {
         if (arrStr[i].length < minNumber) {
             minNumber = arrStr[i].length;
             minWord = arrStr[i];
         }
          if (minNumber === 1) break; //Якщо довжина слова == 1 то вихід
     }
     return [minNumber, minWord]
}

Заміряємо час
var start = new Date().getTime();
let rez;
//визиваємо 100000 разів 
for (let i = 0; i < 100000; i++) {
    rez = getShortWord(str);
}

Кінець замірів
var end = new Date().getTime();
var time = end - start;


console.log(rez)
console.log('Время выполнения = ' + time);
```
