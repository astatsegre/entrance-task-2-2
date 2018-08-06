window.onload = function () {

};

function openModal(event, id) {
  let cardForAnimation = document.createElement('div');
  let overlay = document.getElementById('js-overlay');
  let layout = document.getElementById('js-layout');
  let modal = document.getElementById(`js-modal-window-${id}`);
  let accept = document.getElementById(`js-modal-accept-${id}`);
  let cancel = document.getElementById(`js-modal-cancel-${id}`);
  let cardTop = event.currentTarget.getBoundingClientRect().top + 'px';
  let cardLeft = event.currentTarget.getBoundingClientRect().left + 'px';

  cardForAnimation.classList.add('anim-card');
  cardForAnimation.style.top = cardTop;
  cardForAnimation.style.left = cardLeft;
  document.body.appendChild(cardForAnimation)
  let requestId = requestAnimationFrame(function () {
    cardForAnimation.style.top = '20px';
    cardForAnimation.style.left = '20px';
    cardForAnimation.classList.add('modal')
    overlay.classList.add('overlay')
    layout.classList.add('gaussian')
  });
  setTimeout(function () {
    accept.classList.remove('modal__btn--none')
    cancel.classList.remove('modal__btn--none')
    modal.classList.remove('modal--none')
    cardForAnimation.remove()
  }, 400)
}

function closeModal(event, id) {
  let cardForAnimation = document.createElement('div');
  let modal = document.getElementById(`js-modal-window-${id}`);
  let card = document.getElementById(`js-card-id-${id}`);
  let cardTop = card.getBoundingClientRect().top + 'px';
  let cardLeft = card.getBoundingClientRect().left + 'px';
  let cardBackgroundColor = window.getComputedStyle(card, null).backgroundColor;
  let accept = document.getElementById(`js-modal-accept-${id}`);
  let cancel = document.getElementById(`js-modal-cancel-${id}`);
  let overlay = document.getElementById('js-overlay');
  let layout = document.getElementById('js-layout');

  cardForAnimation.classList.add('modal');
  document.body.appendChild(cardForAnimation)

  accept.classList.add('modal__btn--none')
  cancel.classList.add('modal__btn--none')
  overlay.classList.remove('overlay')
  layout.classList.remove('gaussian')

  let requestId = requestAnimationFrame(function () {
    cardForAnimation.style.top = cardTop;
    cardForAnimation.style.left = cardLeft;
    cardForAnimation.style.width = '200px';
    cardForAnimation.style.height = '120px';
    cardForAnimation.style.backgroundColor = cardBackgroundColor;

  });

  setTimeout(function () {
    cardForAnimation.remove()
  }, 400)


  modal.classList.add('modal--none')

}