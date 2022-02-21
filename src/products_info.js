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


(() => {
  const refs = {
    openModalBtn: document.querySelector('[cream-info-open]'),
    closeModalBtn: document.querySelector('[cream-info-close]'),
    modal: document.querySelector('[cream-info]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('cream__info--ishidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[milk-info-open]'),
    closeModalBtn: document.querySelector('[milk-info-close]'),
    modal: document.querySelector('[milk-info]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('milk__info--ishidden');
  }
})(); 