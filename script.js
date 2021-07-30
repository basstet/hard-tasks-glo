'use strict';

let num = 266219,
    numArray = [],
    numMult;

num = num.toString(); // преобразую в строку, чтобы достать цифры по-отдельности
 
for (let i = 0; i < 6; i++) {
  numArray.push(+num[i]); // заполняю массив цифрами, преобразуя их в числа
}
numMult = numArray.reduce((accumulator, currentValue) => accumulator * currentValue); // перемножаю

console.log(numMult);

numMult **= 3; // возвожу в 3 степень

console.log(numMult.toString().substr(0, 2)); // преобразую в строку и вывожу первые две цифры полученного числа