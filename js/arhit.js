'use strict'

const sections = document.querySelectorAll('section[id]');
const menu_links = document.querySelectorAll('.usr-menu a');

const makeActive = (link) => menu_links[link].classList.add('w3-light-grey');
const removeActive = (link) => menu_links[link].classList.remove('w3-light-grey');
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

const sectionMargin = 100;

let currentActive = 0;

window.addEventListener('scroll', () => {
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

  if (current !== currentActive) {
    removeAllActive();
    currentActive = current;
    makeActive(current);
  }
});

// Modal Image Gallery
const gallery = document.querySelector('.usr-gallery');
const images = document.querySelectorAll('.usr-gallery .w3-image');
const overlayGallery = document.querySelector('.usr-gallery__overlay');

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    images[i].classList.toggle('w3-image--show');
    overlayGallery.classList.toggle('usr-gallery__overlay--hidden');

    overlayGallery.onclick = function () {
      overlayGallery.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('w3-image--show');
    };
  };

  images[i].onkeyup = function (e) {
    if (e.keyCode === 27) {
      overlayGallery.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('w3-image--show');
    } else if (e.keyCode === 13) {
      overlayGallery.classList.remove('usr-gallery__overlay--hidden');
      images[i].classList.add('w3-image--show');
    }
  };

  images[i].onblur = function () {
    overlayGallery.classList.add('usr-gallery__overlay--hidden');
    images[i].classList.remove('w3-image--show');
  };
}
