window.onload = function () {

};

function openModal(event, id) {
  let {accept, cancel, cardForAnimation, cardLeft, cardTop, layout, modal, overlay} = varsFactory(id);

  cardForAnimation.classList.add('card__for-animation');
  cardForAnimation.style.cssText = `top: ${cardTop}; left: ${cardLeft}`;
  document.body.appendChild(cardForAnimation);

  requestAnimationFrame(function () {
    cardForAnimation.style.cssText = `top: 20px; left: 20px`;
    cardForAnimation.classList.add('modal');
    overlay.classList.add('overlay');
    layout.classList.add('gaussian')
  });

  setTimeout(function () {
    accept.classList.remove('modal__btn--none');
    cancel.classList.remove('modal__btn--none');
    modal.classList.remove('modal--none');
    cardForAnimation.remove()
  }, 400)
}

function closeModal(event, id) {
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