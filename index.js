'strict mode'
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

let firstMenuElem = document.getElementById('first_menu');
let firstTitleElem = firstMenuElem.querySelector('.drop_menu_title');

firstTitleElem.onclick = function () {
  firstMenuElem.classList.toggle('open');
};
let secondMenuElem = document.getElementById('second_menu');
let secondTitleElem = secondMenuElem.querySelector('.drop_menu_title');

secondTitleElem.onclick = function () {
  secondMenuElem.classList.toggle('open');
};
let thirdMenuElem = document.getElementById('third_menu');
let thirdTitleElem = thirdMenuElem.querySelector('.drop_menu_title');

thirdTitleElem.onclick = function () {
  thirdMenuElem.classList.toggle('open');
};
let fourthMenuElem = document.getElementById('fourth_menu');
let fourthTitleElem = fourthMenuElem.querySelector('.drop_menu_title');

fourthTitleElem.onclick = function () {
  fourthMenuElem.classList.toggle('open');
};
let fifthMenuElem = document.getElementById('fifth_menu');
let fifthTitleElem = fifthMenuElem.querySelector('.drop_menu_title');

fifthTitleElem.onclick = function () {
  fifthMenuElem.classList.toggle('open');
};


const swiper = new Swiper('.stages_slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.stages_slider_btn_next',
    prevEl: '.stages_slider_btn_prev',
  },

  slidesPerView: 1,
})

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

