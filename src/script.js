'use strict';

function scrollToWhy() {
  document.getElementById('why-lumenocity').scrollIntoView({
    behavior: 'smooth'
  });
}

function init() {
  for (const el of document.querySelectorAll('.scroll-to-why')) {
    el.addEventListener('click', scrollToWhy);
  }
}

init();