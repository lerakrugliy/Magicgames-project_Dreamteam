const butEl = document.querySelector('.check_year__but');
const inputEl = document.querySelector('.check_year__input');
const resultEl = document.querySelector('.check_year__result');

butEl.addEventListener('click', () => {
  if (isNaN(inputEl.value) || inputEl.value === '') {
    resultEl.innerHTML = 'Ви не ввели число';
    resultEl.classList.remove('success');
    resultEl.classList.add('error');
  } else {
    resultEl.innerHTML =
      inputEl.value % 4 === 0
        ? 'Ви народилися у високосний рік!'
        : 'Ви народилися не у високосний рік!';
    resultEl.classList.remove('error');
    resultEl.classList.add(inputEl.value % 4 === 0 ? 'success' : 'error');
    inputEl.value = '';
  }
});
