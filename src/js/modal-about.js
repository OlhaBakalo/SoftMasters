(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', () => {toggleModal(); toggleBodyOverflow('hidden')});
  refs.closeModalBtn.addEventListener('click', () => {toggleModal(); toggleBodyOverflow('visible')});

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleBodyOverflow(value) {
    refs.body.style.overflow = value;
  }
})();