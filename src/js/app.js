"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navContainer = document.querySelector('.nav__container');
const logo = document.querySelector('.logo');
const about = document.querySelector('.about');

mobileMenu.addEventListener('click', ()=>{

  nav.classList.toggle('is__visible');
  body.classList.toggle('push__left');
  header.classList.toggle('push__left');
});
window.addEventListener('scroll', function(e) {
  console.log(window.scrollY);
  if(window.scrollY){
    header.classList.add('is__sticky');
    navContainer.classList.add('sticky');
    logo.classList.add('sticky');
  }else if(!window.scrollY){
    header.classList.remove('is__sticky');
    navContainer.classList.remove('sticky');
    logo.classList.remove('sticky');
  }
});
about.addEventListener('scroll', function(e) {
  console.log(window.scrollY);
  // if(window.scrollY){
  //   header.classList.add('is__sticky');
  //   navContainer.classList.add('sticky');
  //   logo.classList.add('sticky');
  // }else if(!window.scrollY){
  //   header.classList.remove('is__sticky');
  //   navContainer.classList.remove('sticky');
  //   logo.classList.remove('sticky');
  // }
});
