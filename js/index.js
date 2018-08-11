'use strict';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let scenariousPage = 0;
function openModal(event, id) {
  document.documentElement.classList.add('restrict-scroll');
  document.body.classList.add('restrict-scroll');
  let {accept, cancel, cardForAnimation, cardLeft, cardTop, layout, modal, overlay} = varsFactory(id);
  modal.classList.add('modal--hidden');
  modal.classList.remove('modal--none');
  cardForAnimation.classList.add('card__for-animation');
  cardForAnimation.style.cssText = `top: ${cardTop}; left: ${cardLeft}`;
  document.body.appendChild(cardForAnimation);

  requestAnimationFrame(function () {
    cardForAnimation.style.cssText = `top: ${modal.getBoundingClientRect().top}px; left: ${modal.getBoundingClientRect().left}px`;
    cardForAnimation.classList.add('modal');
    overlay.classList.add('overlay');
    layout.classList.add('gaussian')
  });

  setTimeout(function () {
    modal.classList.remove('modal--hidden');
    accept.classList.remove('modal__btn--none');
    cancel.classList.remove('modal__btn--none');
  }, 400);

  //иначе иногда моргает
  setTimeout(function () {
    cardForAnimation.remove()
  }, 450)
}

function closeModal(event, id) {
  document.documentElement.classList.remove('restrict-scroll');
  document.body.classList.remove('restrict-scroll');
  let {accept, cancel, cardBackgroundColor, cardForAnimation, cardLeft, cardTop, layout, modal, overlay} = varsFactory(id);

  cardForAnimation.classList.add('modal');
  document.body.appendChild(cardForAnimation);
  modal.classList.add('modal--none');

  accept.classList.add('modal__btn--none');
  cancel.classList.add('modal__btn--none');
  overlay.classList.remove('overlay');
  layout.classList.remove('gaussian');

  requestAnimationFrame(function () {
    cardForAnimation.style.cssText = `top: ${cardTop}; left: ${cardLeft}; width: 200px; height: 120px; background-color: ${cardBackgroundColor}`;
  });

  setTimeout(function () {
    cardForAnimation.remove()
  }, 400)
}

function varsFactory(id) {
  let card = document.getElementById(`js-card-id-${id}`);
  return {
    accept: document.getElementById(`js-modal-accept-${id}`),
    cancel: document.getElementById(`js-modal-cancel-${id}`),
    cardBackgroundColor: window.getComputedStyle(card, null).backgroundColor,
    cardForAnimation: document.createElement('div'),
    cardLeft: card.getBoundingClientRect().left + 'px',
    cardTop: card.getBoundingClientRect().top + 'px',
    layout: document.getElementById('js-layout'),
    modal: document.getElementById(`js-modal-window-${id}`),
    overlay: document.getElementById('js-overlay'),
  }
}

function toggleSelect(event, id) {
  document.getElementById(`js-select-${id}`).classList.toggle('mobile-select--none')
}

function scrollScenarious(event, elementIdToScroll, scrollableContent, elementsAmount, revert) {
  if (!revert && scenariousPage > elementsAmount - 2 || revert && scenariousPage < elementsAmount - 2) return;

  scrollByBtn(elementIdToScroll, document.getElementById(scrollableContent).offsetWidth / elementsAmount, revert);

  scenariousPage = revert ? scenariousPage - 1 : scenariousPage + 1;

  if (scenariousPage >= elementsAmount - 1) {
    document.getElementById('js-scenarious-btn-end').classList.remove('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-scenarious-btn-end').classList.add('svg-arrow', 'svg-arrow-dims')
  } else {
    document.getElementById('js-scenarious-btn-end').classList.add('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-scenarious-btn-end').classList.remove('svg-arrow', 'svg-arrow-dims')
  }
  if (scenariousPage > 0) {
    document.getElementById('js-scenarious-btn-start').classList.add('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-scenarious-btn-start').classList.remove('svg-arrow', 'svg-arrow-dims')
  } else {
    document.getElementById('js-scenarious-btn-start').classList.remove('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-scenarious-btn-start').classList.add('svg-arrow', 'svg-arrow-dims')
  }
}

function scrollGadgets(event, elementIdToScroll, revert) {
  let totalContentWidth = 9 * 220;
  let elementToScroll = document.getElementById(elementIdToScroll);

  scrollByBtn(elementIdToScroll, 220, revert);

  if (elementToScroll.scrollLeft + 220 + elementToScroll.offsetWidth >= totalContentWidth) {
    document.getElementById('js-gadgets-btn-end').classList.remove('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-gadgets-btn-end').classList.add('svg-arrow', 'svg-arrow-dims')
  } else {
    document.getElementById('js-gadgets-btn-end').classList.add('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-gadgets-btn-end').classList.remove('svg-arrow', 'svg-arrow-dims')
  }
  if (elementToScroll.scrollLeft > 220) {
    document.getElementById('js-gadgets-btn-start').classList.add('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-gadgets-btn-start').classList.remove('svg-arrow', 'svg-arrow-dims')
  } else {
    document.getElementById('js-gadgets-btn-start').classList.remove('svg-arrow-active', 'svg-arrow-active-dims');
    document.getElementById('js-gadgets-btn-start').classList.add('svg-arrow', 'svg-arrow-dims')
  }
}

function scrollByBtn(elementIdToScroll, scrollValue, revert) {
  let elementToScroll = document.getElementById(elementIdToScroll);
  let currentScroll = elementToScroll.scrollLeft;

  animate(function (time) {
    elementToScroll.scrollLeft = revert ? currentScroll - time / (450 / scrollValue) : time / (450 / scrollValue) + currentScroll
  }, 450);
}

function animate(draw, duration) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timePassed = time - start;
    if (timePassed > duration) timePassed = duration;
    draw(timePassed);
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }
  });
}

function sectionMainScroll() {
  let arrow = document.getElementById('js-vertical-arrow');
  arrow.classList.remove('card__icon--double-arrow', 'svg-double-arrow', 'svg-double-arrow-dims')
  arrow.classList.add('svg-temperature', 'svg-temperature-dims')
}
