function scrollTo(selector) {
  return function () {
    document.getElementById(selector).scrollIntoView({
      behavior: 'smooth'
    });
  }
}

function init() {
  for (const el of document.querySelectorAll('.scroll-to-why')) {
    el.addEventListener('click', scrollTo('why-wallet'));
  }

  for (const el of document.querySelectorAll('.scroll-to-get')) {
    el.addEventListener('click', scrollTo('get-app'));
  }
}

init();
