'use strict';

// Hour 1: Modal Foundation & Class Toggling
console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

// section 1 - dom element selection
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
console.log('Open buttons:', btnsOpenModalEl.length);

// section 2 - open/close helpers
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);