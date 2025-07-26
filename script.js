const authModal = document.querySelector('.auth-modal');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-btn-modal');
const closeBtnModal = document.querySelector('.close-btn-modal');

registerLink.addEventListener('click', () => authModal.classList.add('slide'));
loginLink.addEventListener('click', () => authModal.classList.remove('slide'));
loginBtn.addEventListener('click', () => authModal.classList.add('show'));
closeBtnModal.addEventListener('click', () => authModal.classList.remove('show' , 'slide'));
