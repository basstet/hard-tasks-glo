'use strict';

const titleName = document.querySelector('#name'),
      signUpBtn = document.querySelector('#sign-up'),
      logInBtn = document.querySelector('#log-in'),
      userList = document.querySelector('.user-list');
let usersData = [];

function UserData (firstName, lastName, login, password, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.login = login;
  this.password = password;
  this.regDate = regDate;
}

// отправить данные в local storage:
const sendToLocalStorage = function() {
  localStorage.setItem('userData', JSON.stringify(usersData));
};

const render = function() {
  // достать данные из local storage, если они есть:
  const userStoredData = JSON.parse(localStorage.getItem('userData'));
  if (userStoredData) {
    usersData = userStoredData;
  }

  // обновить DOM:
  userList.textContent = '';

  usersData.forEach(function(item) {
    // отобразить список с именами пользователей:
    const newElem = document.createElement('p');
    newElem.innerHTML = `
    <span>✘</span>
    Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}`;

    userList.append(newElem);

    // удалить пользователя:
    const btnRemoveUser = newElem.querySelector('span');

    btnRemoveUser.addEventListener('click', function() {
      const itemIndex = userStoredData.indexOf(item);
      userStoredData.splice(itemIndex, 1);
      sendToLocalStorage();
      render();
    });
  });
};

// зарегистрироваться:
const signUpUser = function() {
  const userName = prompt(`Введите ваше Имя и Фамилию:`).trim().split(' '),
        userLogin = prompt(`Придумайте ваш логин`).trim(),
        userPassword = prompt(`Придумайте ваш пароль`).trim(),
        userFirstName = userName[0],
        userLastName = userName[1],
        signUpDate = new Date().toLocaleString('ru', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });

  const newUser = new UserData(userFirstName, userLastName, userLogin, userPassword, signUpDate);
  usersData.push(newUser);
  sendToLocalStorage();
  render();
};

// авторизоваться:
const logInUser = function() {
  const enteredLogin = prompt(`Логин`).trim(),
        enteredPassword = prompt(`Пароль`).trim(),
        userStoredData = JSON.parse(localStorage.getItem('userData'));
  let isRegistered = false;
  
  if (userStoredData) {
    userStoredData.forEach(function(item) {
      if (item.login === enteredLogin && item.password === enteredPassword) {
        // вставить имя в приветствие:
        titleName.textContent = item.firstName;
        isRegistered = true;
        return;
      }
    });
    if (!isRegistered) {
      alert(`Пользователь не найден`);
    }
  } else {
    alert(`Пользователь не найден`);
  }
};

signUpBtn.addEventListener('click', signUpUser);
logInBtn.addEventListener('click', logInUser);
render();