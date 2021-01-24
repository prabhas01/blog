'use strict'

const btnSlide = document.querySelector('.usr-btn-slide');
const slides = document.querySelectorAll('.slide');

let slideIndex = 1;
showDivs(slideIndex);

btnSlide.onclick = function () {
  plusDivs(1);
};

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = slides;
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 6000);
}

const modalBtns = document.querySelectorAll('.usr-modal-btn');
const modal = document.querySelector('.w3-modal');
const modalClose = document.querySelector('.usr-modal-btn-close');

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function () {
    modal.classList.add('usr-show');
  };
}

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
