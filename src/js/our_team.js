const galleryEl = document.querySelector('.gallery__list');
const leftArrowEl = document.querySelector(
  '.gallery__arrow[data-arrow="left"]'
);
const rightArrowEl = document.querySelector(
  '.gallery__arrow[data-arrow="right"]'
);
const indicatorsArr = document.querySelectorAll('.gallery__indicator');

const cardWidth = 315;
let slide = 0;

const maxScroll = (indicatorsArr.length - 1) * cardWidth;

const showIndication = () => {
  indicatorsArr.forEach(indicator =>
    indicator.classList.remove('active__indicator')
  );

  const currentSlideIndex = Math.round(slide / cardWidth);

  if (indicatorsArr[currentSlideIndex]) {
    indicatorsArr[currentSlideIndex].classList.add('active__indicator');
  }
};

leftArrowEl.addEventListener('click', () => {
  rightArrowEl.style.opacity = '1';

  slide -= slide > 0 ? cardWidth : 0;

  if (slide === 0) leftArrowEl.style.opacity = '0';

  showIndication();
  galleryEl.scrollTo({
    left: slide,
    behavior: 'smooth',
  });
});

rightArrowEl.addEventListener('click', () => {
  leftArrowEl.style.opacity = '1';

  slide += slide < maxScroll ? cardWidth : 0;

  if (slide >= maxScroll) rightArrowEl.style.opacity = '0';

  showIndication();
  galleryEl.scrollTo({
    left: slide,
    behavior: 'smooth',
  });
});
