'use strict';

const num = 266219,
      numArray = num.toString().split('');
      
let numMult = numArray.reduce((accumulator, currentValue) => accumulator * currentValue); // перемножаю

console.log(numMult);

numMult **= 3; // возвожу в 3 степень

console.log(numMult.toString().substr(0, 2)); // преобразую в строку и вывожу первые две цифры полученного числа