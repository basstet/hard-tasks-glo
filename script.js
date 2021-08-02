'use strict';

// Задания урока 2:
const num = 266219,
      numArray = num.toString().split('');
      
let numMult = numArray.reduce((accumulator, currentValue) => accumulator * currentValue); // перемножаю

console.log(numMult);

numMult **= 3; // возвожу в 3 степень

console.log(numMult.toString().substr(0, 2)); // преобразую в строку и вывожу первые две цифры полученного числа

// Урок 3, задание 1:
let lang = 'ru',
  weekDays1 = [],
  weekDays2 = [],
  weekDays3 = new Map();

if (lang === 'ru') {
  weekDays1 = ['пн','вт','ср','чт','пт','сб','вс'];
} else {
  weekDays1 = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
}
console.log(weekDays1);

switch (lang) {
  case 'ru':
    weekDays2 = ['пн','вт','ср','чт','пт','сб','вс'];
    break;
  case 'en':
  default:
    weekDays2 = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    break;
}
console.log(weekDays2);

weekDays3 = new Map([
  ['ru', ['пн','вт','ср','чт','пт','сб','вс']],
  ['en', ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']]
]);
console.log(weekDays3.get(lang));

// Урок 3, задание 2:
let namePerson,
  personStatus = namePerson === `Артем` ? console.log(`директор`) : namePerson === `Максим` ? console.log(`преподаватель`) : console.log(`студент`);