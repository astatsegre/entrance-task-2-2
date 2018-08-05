window.onload = function () {

};

function toggleModal(event) {
  let cardForAnimation = document.createElement('div');
  cardForAnimation.classList.add('card');
  cardForAnimation.classList.add('card--tall');
  event.target.appendChild(cardForAnimation)
  console.log(event.target)

  let modal = document.getElementById('js-modal');
  let modalWindow = document.getElementById('js-modal-window');
  let layout = document.getElementById('js-layout');
  modal.classList.toggle('modal--none');
  modal.classList.toggle('modal--hidden');
  console.log(222, modalWindow.getBoundingClientRect())

  // layout.classList.toggle('gaussian');
}