'use strict'

const modalBtn = document.querySelector('.usr-modal-btn');
const modal = document.querySelector('.w3-modal');
const modalClose = document.querySelector('.usr-modal-btn-close');

modalBtn.onclick = function () {
  modal.classList.add('usr-show');
};

modalClose.onclick = function () {
  modal.classList.remove('usr-show');
};

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) {
    if (modal.classList.contains('usr-show')) {
      modal.classList.remove('usr-show');
    }
  }
});

const replBtns = document.querySelectorAll('.usr-repl-btn');
const replModals = document.querySelectorAll('.usr-repl-modal');

for (let i = 0; i < replBtns.length; i++) {
  replBtns[i].onclick = function () {
    replModals[i].classList.toggle('usr-hidden');
  };
}
