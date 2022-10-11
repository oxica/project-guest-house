const sliderContainer = document.querySelector('.reviews__list');
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slide = document.querySelectorAll(".reviews__item");


let idx = 0;
let interval = setInterval(run, 5000);

function run() {
    idx++;
    changeSlide();
  }

  function changeSlide() {
    if (idx > slide.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = slide.length - 1;
    }
  
    sliderContainer.style.transform = `translateX(${-idx * 584}px)`;
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 5000);
  }
  
  rightBtn.addEventListener("click", () => {
    idx++;
    changeSlide();
    resetInterval();
  });
  
  leftBtn.addEventListener("click", () => {
    idx--;
    changeSlide();
    resetInterval();
  });
