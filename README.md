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
