'use strict';

const cutText = function(textToCut) {
  if (typeof textToCut === 'string') {
    if (textToCut.length > 30) {
      // удаляем пробелы, обрезаем текст и добавляем многоточие:
      return textToCut.trim().substr(0, 30).padEnd(33, '.');
    } else {
      // удаляем пробелы:
      return textToCut.trim();
    }
  } else {
    alert(`Значение не является текстом`);
  }
};

alert(cutText(prompt(`Введите текст`)));