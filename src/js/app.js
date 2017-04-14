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


form.addEventListener('focusin', (e) => {
  const input = e.target;
  const label = e.target.previousElementSibling;
  if(label.tagName == "LABEL"){
    label.classList.toggle('push__up');
  }
});
form.addEventListener('focusout', (e) =>{
  const input = e.target;
  const label = e.target.previousElementSibling;
  if(label.tagName == "LABEL"){
    label.classList.toggle('push__up');
  }
});



//
// Seding Contact Form Email
//

function validEmail(email) { // see:
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData() {
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
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
  const data = getFormData();
  if(!validEmail(data.email) ) {
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    const url = event.target.action;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      document.getElementById('form').style.display = 'none'; // hide form
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    let encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}


form.addEventListener("submit", handleFormSubmit, false);
