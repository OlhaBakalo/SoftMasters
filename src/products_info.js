(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-info-open]'),
    closeModalBtn: document.querySelector('[products-info-close]'),
    modal: document.querySelector('[products-info]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products__info--ishidden');
  }
})();