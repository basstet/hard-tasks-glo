'use strict';

// Урок 3, задание 1:
let lang = 'ru',
  weekDays;
const weekDaysLang = new Map([
  ['ru', ['пн','вт','ср','чт','пт','сб','вс']],
  ['en', ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']]
]);

// 1a:
if (lang === 'ru') {
  weekDays = weekDaysLang.get('ru');
} else {
  weekDays = weekDaysLang.get('en');
}
console.log(weekDays);

// 1b:
switch (lang) {
  case 'ru':
    weekDays = weekDaysLang.get('ru');
    break;
  case 'en':
  default:
    weekDays = weekDaysLang.get('en');
    break;
}
console.log(weekDays);

// 1c:
weekDays = weekDaysLang.get(lang);
console.log(weekDays);

// Урок 3, задание 2:
let namePerson,
  personStatus = namePerson === `Артем` ? console.log(`директор`) : namePerson === `Максим` ? console.log(`преподаватель`) : console.log(`студент`);