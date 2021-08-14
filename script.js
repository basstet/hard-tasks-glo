'use strict';

const titleColor = document.querySelector('.color'),
      changeBtn = document.querySelector('#change'),
      rangeStr = `0123456789ABCDEF`;

changeBtn.addEventListener('click', function() {
  let newColor = [];
  for (let i = 0; i < 6; i++) {
    newColor += rangeStr[Math.floor(Math.random() * 16)];
  }

  changeBtn.style.color = `#${newColor}`;
  titleColor.textContent = `#${newColor}`;
  document.body.style.backgroundColor = `#${newColor}`;
});