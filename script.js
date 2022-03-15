'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});








// scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect()
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); //clicked button
  console.log('height/width viewport', document.documentElement.clientHeight,
  document.documentElement.clientWidth);
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)  ///relative to viewport not document + window.pageXOffset window.pageYOffset makes it relative to document
//=
  // window.scrollTo({ left: s1coords.left + window.pageXOffset, top: s1coords.top + window.pageYOffset, behavior: 'smooth' })
  //=
  section1.scrollIntoView({behavior:'smooth'})

})

//page nav

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})  
//   })
// })

//event delegation ===

// 1. add event listener to common parent element


// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // e.preventDefault()

 //matching strategy
  
if (e.target.classList.contains('.nav__link')) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });  
  }
})



///////////////////////////////////////////////////////////
/*

console.log(document.documentElement);//select whole document
console.log(document.head); //head
console.log(document.dbody);//body
console.log(document.documentElement);

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section') //select all containing class section// returns nodelist


document.getElementById('section-1')

const allButtons = document.getElementsByTagName('button')//returns life list


//creating and inserting elements

// insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = 'We use cookies For improved performance. <button class ="btn btn--close-cookie"> Got It! </button>'
// header.prepend(message) //one place at  TIME
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

 console.log(message);
//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
  // message.remove()
  message.parentElement.removeChild(message);
})

///styles,elements and classes

message.style.backgroundColor = '#37383d';
message.style.width = '120%'

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); //string
 
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'


// css custom properties/vsriables

document.documentElement.style.setProperty('--color-primary', 'orangered')

//attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src); ///relative

logo.alt = 'beautiful minimalist logo'
//non-standard
console.log(logo.getAttribute('designer')); //absolute

logo.setAttribute('company','bankist');

// data attributes
console.log(logo.dataset.versionNumber);


// classes
logo.classList.add('c','j')
logo.classList.remove('c')
logo.classList.toggle( 'c','j')
logo.classList.contains( 'c') 

*/





// event Handlers
/*

const h1 = document.querySelector('h1');

const alertH1 = ('mouseenter', function (e) {
  alert('addEventListener: Great! You Are Reading the Heading')
  h1.removeEventListener('mouseenter', alertH1)
})

// h1.addEventListener('mouseenter', function (e) {
//   alert('onmouseenter: Great! You Are Reading the Heading' )
// })
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
 
  this.style.backgroundColor = randomColor();
})
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
})

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
  // this === current target
// e.stopPropagation

})
*/

