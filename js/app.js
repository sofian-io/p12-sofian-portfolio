"use strict";function validEmail(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}function getFormData(){var e=document.querySelector("#name"),t=document.querySelector("#phone"),o=document.querySelector("#email"),n=document.querySelector("#message");return{name:[e.value],phone:[t.value],email:[o.value],message:[n.value]}}function handleFormSubmit(e){e.preventDefault();var t=getFormData();if(!validEmail(t.email))return document.getElementById("email-invalid").style.display="block",!1;var o=e.target.action,n=new XMLHttpRequest;n.open("POST",o),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){document.getElementById("form").style.display="none",document.getElementById("thankyou_message").style.display="block"};var a=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");n.send(a)}var mobileMenu=document.querySelector(".mobile__menu"),nav=document.querySelector(".nav"),body=document.querySelector(".body"),header=document.querySelector(".header"),navContainer=document.querySelector(".nav__container"),logo=document.querySelector(".logo"),about=document.querySelector(".about"),form=document.querySelector(".form");mobileMenu.addEventListener("click",function(){nav.classList.toggle("is__visible"),body.classList.toggle("push__left"),header.classList.toggle("push__left")}),window.addEventListener("scroll",function(e){window.scrollY?(header.classList.add("is__sticky"),navContainer.classList.add("sticky"),logo.classList.add("sticky")):window.scrollY||(header.classList.remove("is__sticky"),navContainer.classList.remove("sticky"),logo.classList.remove("sticky"))}),about.addEventListener("scroll",function(e){console.log(window.scrollY)}),form.addEventListener("focusin",function(e){var t=(e.target,e.target.previousElementSibling);"LABEL"==t.tagName&&t.classList.toggle("push__up")}),form.addEventListener("focusout",function(e){var t=(e.target,e.target.previousElementSibling);"LABEL"==t.tagName&&t.classList.toggle("push__up")}),form.addEventListener("submit",handleFormSubmit,!1);
//# sourceMappingURL=app.js.map