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
      nyDaysCounter = Math.floor((ny - today) / 1000 / 60 / 60 / 24);

document.body.innerText = `Добр${dayPart}
  Сегодня: ${weekDayF}
  Текущее время: ${timeNow}
  До нового года осталось ${nyDaysCounter} дней`;
