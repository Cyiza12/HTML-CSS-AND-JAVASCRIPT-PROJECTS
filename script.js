const closeBtn = document.querySelector('.close-icon');
const Button = document.querySelector('.btn');
const container = document.querySelector('.container');
const popupContainer = document.querySelector('.popup-container');

Button.addEventListener('click', () => {
  container.classList.add('active');
  popupContainer.classList.remove('active');
});
closeBtn.addEventListener('click', () => {
  container.classList.remove('active');
  popupContainer.classList.add('active');
});
