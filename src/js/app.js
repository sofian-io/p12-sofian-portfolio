"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');

mobileMenu.addEventListener('click', ()=>{

  nav.classList.toggle('is__visible');
  body.classList.toggle('push__left');
  header.classList.toggle('push__left');

});
window.addEventListener('scroll', function(e) {
  console.log('test');
  console.log(window.scrollY);
});
