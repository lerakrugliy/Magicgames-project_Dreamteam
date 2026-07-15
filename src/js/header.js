const butEl = document.querySelector('.header__switcher');
const iconEl = document.querySelector('.header__icon');
const imgSunEl = document.querySelector('.header__img[data-sun]');
const imgMoonEl = document.querySelector('.header__img[data-moon]');
const butOpenSelectorEl = document.querySelector('.header__text:nth-child(1)');
const svgEl = document.querySelector('.header__svg');
const selectorEl = document.querySelector('.header__selector');
const selectEls = document.querySelectorAll('.header__select');
const sectionsEls = Array.from(document.querySelectorAll('section[id]'));
let darkTheme =
  localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme') === 'true'
      ? true
      : false
    : false;

const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
sectionsEls.forEach(sectionEl =>
  sectionEl.setAttribute(
    'category',
    games[sectionsEls.indexOf(sectionEl)].category
  )
);

const toggleSelector = () => {
  svgEl.classList.toggle('active');
  selectorEl.classList.toggle('active');
};

butOpenSelectorEl.addEventListener('click', () => toggleSelector());

const activeSelect = (selectEl, category) => {
  toggleSelector();
  selectEls.forEach(el => el.classList.remove('active'));
  selectEl.classList.add('active');
  category === 'all'
    ? sectionsEls.forEach(sectionEl => (sectionEl.style.display = 'block'))
    : sectionsEls.forEach(
        sectionEl =>
          (sectionEl.style.display =
            sectionEl.getAttribute('category') === category ? 'block' : 'none')
      );
};

selectEls[0].addEventListener('click', () => activeSelect(selectEls[0], 'all'));
selectEls[1].addEventListener('click', () =>
  activeSelect(selectEls[1], 'numerical')
);
selectEls[2].addEventListener('click', () =>
  activeSelect(selectEls[2], 'game')
);
selectEls[3].addEventListener('click', () =>
  activeSelect(selectEls[3], 'acquaintance')
);

const themeChange = theme => {
  iconEl.style.transform = theme ? 'translateX(9px)' : 'translateX(-10px)';
  if (theme) {
    imgSunEl.style.opacity = '0';
    imgSunEl.style.position = 'absolute';
    imgMoonEl.style.opacity = '1';
    imgMoonEl.style.position = 'static';
  } else {
    imgMoonEl.style.opacity = '0';
    imgMoonEl.style.position = 'absolute';
    imgSunEl.style.opacity = '1';
    imgSunEl.style.position = 'static';
  }
  document.documentElement.classList.toggle('dark', theme);
};

themeChange(darkTheme);

butEl.addEventListener('click', () => {
  darkTheme = !darkTheme;
  localStorage.setItem('theme', darkTheme);
  themeChange(darkTheme);
});
