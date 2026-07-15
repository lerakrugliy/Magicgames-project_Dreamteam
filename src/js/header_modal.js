(() => {
  const modal = document.querySelector('[data-modal-header]');
  const closeBtns = document.querySelectorAll(
    '[data-modal-header-close], [data-modal-header-close-btn]'
  );

  closeBtns.forEach(btn =>
    btn.addEventListener('click', () => {
      modal.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    })
  );

  document.body.classList.add('no-scroll');
})();
