window.onload = function () {

};

function toggleModal(event) {
  let cardForAnimation = document.createElement('div');
  let overlay = document.getElementById('js-overlay');
  let layout = document.getElementById('js-layout');
  let accept = document.getElementById('js-modal-accept');
  let cancel = document.getElementById('js-modal-cancel');

  cardForAnimation.classList.add('anim-card');
  // cardForAnimation.classList.add('modal');
  cardForAnimation.style.top = event.currentTarget.getBoundingClientRect().top + 'px';
  cardForAnimation.style.left = event.currentTarget.getBoundingClientRect().left + 'px';
  // cardForAnimation.style.width = event.currentTarget.getBoundingClientRect().width + 'px';
  // cardForAnimation.style.height = event.currentTarget.getBoundingClientRect().height + 'px';
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
  }, 400)

  console.log(event.currentTarget.getBoundingClientRect())

 /* let modal = document.getElementById('js-modal');
  let modalWindow = document.getElementById('js-modal-window');
  let layout = document.getElementById('js-layout');
  modal.classList.toggle('modal--none');
  modal.classList.toggle('modal--hidden');
  console.log(222, modalWindow.getBoundingClientRect())*/

  // layout.classList.toggle('gaussian');
}