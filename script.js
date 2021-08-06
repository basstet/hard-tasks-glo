'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = new Date().getDay();
console.log(today);

const ul = document.createElement('ul');
document.querySelector('body').appendChild(ul);

for (let item of week) {
  const text = document.createTextNode(item),
        li = document.createElement('li');
  document.querySelector('ul').appendChild(li).appendChild(text);
  if (item === 'Суббота' || item === 'Воскресенье') {
    li.style.fontStyle = 'italic';
  }
  if ((week.indexOf(item) + 1) === today || today === 0 && item === 'Воскресенье') {
    li.style.fontWeight = 'bold';
  }
}