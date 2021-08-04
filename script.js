'use strict';

const arr = [];

// заполняем массив путем ввода чисел
for (let i = 0; i < 7; i++) {
  arr[i] = prompt(`Число ${i+1}`);
}
console.log(arr);

// // определяем какие из них начинаются на 2 или 4
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === '2' ||  arr[i][0] === '4') {
    console.log(arr[i]);
  }
}

// простые числа
let hasRemainder;
for (let i = 1; i <= 100; i++) {
  for (let j = 2; j <= 100; j++) {
    hasRemainder = i % j;
    if (!hasRemainder && i !== j) {
      break;
    } else if (!hasRemainder && i === j) {
      console.log(`${i} делители этого числа 1 и ${j}`);
    }
  }
}