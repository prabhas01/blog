'use strict'

const leftBtn = document.querySelector('.usr-left-btn');
const rightBtn = document.querySelector('.usr-right-btn');
const indicators = document.querySelectorAll('.usr-indicator');

let slideIndex = 1;
showDivs(slideIndex);

leftBtn.onclick = function () {
  plusDivs(-1);
};

rightBtn.onclick = function () {
  plusDivs(1);
};

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName('slide');
  const dots = indicators;
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '');
  }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' w3-white';
}

showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('slide');
  const dots = indicators;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 6000);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '');
  }
  dots[slideIndex - 1].className += ' w3-white';
}

// scrollspy

const sections = document.querySelectorAll('div[id]');
const menu_links = document.querySelectorAll('nav a.w3-bar-item');

const makeActive = (link) => menu_links[link].classList.add('w3-dark-grey');
const removeActive = (link) => menu_links[link].classList.remove('w3-dark-grey');
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

const sectionMargin = 200;

let currentActive = 0;

window.addEventListener('scroll', () => {
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

  if (current !== currentActive) {
    removeAllActive();
    currentActive = current;
    makeActive(current);
  }
});
