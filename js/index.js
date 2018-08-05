window.onload = function () {

};

function toggleModal() {
  let modal = document.getElementById('js-modal');
  let layout = document.getElementById('js-layout');
  modal.classList.toggle('modal--hidden');
  layout.classList.toggle('gaussian');
}