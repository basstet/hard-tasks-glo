'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = new Date().toLocaleString('ru', {weekday: 'long'});
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
  if (item.toLowerCase() === today) {
    li.style.fontWeight = 'bold';
  }
}