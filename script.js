'use strict';

let num = 266219,
    numMult;

num = num.toString(); // преобразую в строку, чтобы достать цифры по-отдельности
numMult = +num[0]; // помещаю первую цифру, преобразовав ее в число

for (let i = 1; i < 6; i++) {
  numMult *= +num[i]; // перемножаю на другие цифры, преобразовывая их в числа
}
console.log(numMult);

numMult **= 3; // возвожу в 3 степень

console.log(numMult.toString().substr(0, 2)); // преобразую в строку и вывожу первые две цифры полученного числа