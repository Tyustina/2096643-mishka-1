let navMain=document.querySelector(".nav"),navToggle=document.querySelector(".nav__toggle");navMain.classList.remove("nav--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("nav--closed")?(navMain.classList.remove("nav--closed"),navMain.classList.add("nav--opened")):(navMain.classList.add("nav--closed"),navMain.classList.remove("nav--opened"))}));let modalWindow=document.querySelector(".modal"),modalToggle=document.querySelector('.button[data-modal="open"]');function openModal(n){n.classList.add("modal--opened")}function closeModal(n){n.classList.remove("modal--opened")}modalToggle.addEventListener("click",(function(){openModal(modalWindow)})),modalWindow.addEventListener("click",(function(n){(n.target.classList.contains("modal")||n.target.classList.contains("button"))&&closeModal(modalWindow)}));