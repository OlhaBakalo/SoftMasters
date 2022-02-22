(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise__modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    modal: document.querySelector('[data-modal-franchise]'),
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