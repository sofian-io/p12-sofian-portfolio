"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navContainer = document.querySelector('.nav__container');
const logo = document.querySelector('.logo');
const about = document.querySelector('.about');
const form = document.querySelector('.form');


//
//  Mobile & Desktop menu animation
//

mobileMenu.addEventListener('click', ()=>{
  nav.classList.toggle('is__visible');
  body.classList.toggle('push__left');
  header.classList.toggle('push__left');
});
window.addEventListener('scroll', function(e) {
  // console.log(window.scrollY);
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

//
// Contact Form animation
//

const formInput = document.querySelectorAll('.form input');
const message = document.querySelector('#message');

form.addEventListener('focusin', (e) => {
  const input = e.target;
  const label = e.target.previousElementSibling;
  if(label && label.tagName == "LABEL"){
    label.classList.toggle('push__up');
  }
});

function hideLabel(inputName){
  inputName.previousElementSibling.classList.add('is__hidden');
}
function showLabel(inputName){
  inputName.previousElementSibling.classList.remove('is__hidden');
}

form.addEventListener('focusout', (e) =>{
  const label = e.target.previousElementSibling;
  if(label && label.tagName == "LABEL"){
    label.classList.toggle('push__up');
  }
  for(let i=0; i < formInput.length; i++){
    if(formInput[i].value){
      hideLabel(formInput[i]);
    }else{
      showLabel(formInput[i]);
    }
  }
  if(message.value){
    hideLabel(message);
  }else{
    showLabel(message);
  }
});



//
// Seding Contact Form Email
//

const fullName = document.querySelector('#fullName');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const buttonContainer = document.querySelector('.form__fieldset--button');
const button = document.querySelector('.form__button');

function getFormData() {
  let data = {
    name: [name.value],
    phone: [phone.value],
    email: [email.value],
    message: [message.value]
  };
  return data;
}
function handleFormSubmit(event) {
  event.preventDefault();
  buttonContainer.removeChild(button);
  let replaceButton = `<button type="submit" class="form__button--disabled" disabled>
  <svg class="form__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M12.655 11.167C5.051 18.14 4.54 29.959 11.512 37.564l2.999-2.75c-5.455-5.948-5.056-15.194.894-20.65l-2.75-2.997z">
      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
    </path>
  </svg>
</button>`;
buttonContainer.insertAdjacentHTML('afterbegin',replaceButton);
const data = getFormData();
const url = event.target.action;
let xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      form.style.display = 'none';
      document.querySelector('.contact__title').innerHTML= 'Message Sent!';
      document.querySelector('.contact__text').innerHTML= 'Thank you for getting in touch. I will get back to you shortly.';
      return;
    }
  }
};
let encoded = Object.keys(data).map(function(k) {
  return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
}).join('&')
xhr.send(encoded);
}

form.addEventListener("submit", handleFormSubmit, false);
