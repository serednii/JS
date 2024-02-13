//https://www.youtube.com/watch?v=DT3tjY1s_qo
var equation = '3+2+5*4/32*14+4587';
var operators = equation.split(/[0-9]+/).filter(Boolean); // Extract operators
var numbers = equation.split(/[\+\-\*\/]/).filter(Boolean); // Extract numbers
var equationArray = [];
// Push the first number to the array
equationArray.push(parseFloat(numbers[0]));
// Loop through the operators and numbers and push them alternately into the array

for (var i = 0; i < operators.length; i++) {
    equationArray.push(operators[i]);
    equationArray.push(parseFloat(numbers[i + 1]));
}

console.log(equationArray);
console.log(numbers);















