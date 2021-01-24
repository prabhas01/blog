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
