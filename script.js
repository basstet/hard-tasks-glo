/* eslint-disable strict */
'use strict';

const todayHour = new Date().toLocaleString('ru', {hour: 'numeric'}),
      dayPart = todayHour < 6 ? 'ой ночи' :
        todayHour >= 6 && todayHour < 12 ? 'ое утро' :
          todayHour >= 18 ? 'ый вечер' : 'ый день',
      weekDay = new Date().toLocaleString('ru', {weekday: 'long'}),
      weekDayF = weekDay[0].toUpperCase() + weekDay.slice(1),
      timeNow = new Date().toLocaleTimeString('en'),
      today = new Date().getTime(),
      ny = new Date('1 january 2022').getTime(),
      nyDaysCounter = Math.floor((ny - today) / 1000 / 60 / 60 / 24),
      p1 = document.createElement('p'),
      p2 = document.createElement('p'),
      p3 = document.createElement('p'),
      p4 = document.createElement('p');

document.body.append(p1);
document.body.append(p2);
document.body.append(p3);
document.body.append(p4);

p1.textContent = `Добр${dayPart}`;
p2.textContent = `Сегодня: ${weekDayF}`;
p3.textContent = `Текущее время: ${timeNow}`;
p4.textContent = `До нового года осталось ${nyDaysCounter} дней`;
