'use strict';

const p1 = document.createElement('p');
p1.className = 'date-a';
document.body.appendChild(p1);
const todayDate1 = new Date().toLocaleString('ru', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const p2 = document.createElement('p');
p2.className = 'date-b';
document.body.appendChild(p2);

let conjHour,
    conjMin,
    conjSec;

const conjTime = function(h, m, s) {
  conjHour = (+h.slice(-1) === 1 && +h !== 11) ? 'час' : 
    ((+h.slice(-1) > 1) && (+h.slice(-1) < 5) && (+h < 11 || +h > 14)) ? 'часа' : 
    'часов';
  conjMin = (+m.slice(-1) === 1 && +m !== 11) ? 'минута' : 
    ((+m.slice(-1) > 1) && (+m.slice(-1) < 5) && (+s < 11 || +m > 14)) ? 'минуты' : 
    'минут';
  conjSec = (+s.slice(-1) === 1 && +s !== 11) ? 'секунда' : 
    ((+s.slice(-1) > 1) && (+s.slice(-1) < 5) && (+s < 11 || +s > 14)) ? 'секунды' : 
    'секунд';
};

const updateTime = setInterval(function() {
  const todayHour = new Date().toLocaleString('ru', {hour: 'numeric'});
  const todayMin = new Date().toLocaleString('ru', {minute: 'numeric'});
  const todaySec = new Date().toLocaleString('ru', {second: 'numeric'});
  conjTime(todayHour, todayMin, todaySec);

  p1.innerHTML = `Сегодня ${todayDate1}, ${todayHour} ${conjHour} ${todayMin} ${conjMin} ${todaySec} ${conjSec}`;

  const today2 = new Date().toLocaleString('ru');
  p2.innerHTML = today2;
}, 1000);