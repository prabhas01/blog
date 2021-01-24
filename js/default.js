'use strict'

const burger = document.querySelector('.usr-burger');
const menu = document.querySelector('.usr-menu');

burger.onclick = function () {
  if (burger.classList.contains('usr-burger--open')) {
    burger.classList.toggle('usr-burger--close');
  } else {
    burger.classList.add('usr-burger--open');
  }

  menu.classList.toggle('usr-hidden');
};
