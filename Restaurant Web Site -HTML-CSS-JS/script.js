//BARS//
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener('click',()=> {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active'); 
    cartContainer.classList.remove('active'); 
});


//SEARCH//
const searchIcon=document.querySelector('.buttons button:first-child');
const searchForm=document.querySelector('.search-form');

searchIcon.addEventListener('click',()=>{
  searchForm.classList.toggle('active');
  cartContainer.classList.remove('active');
  navbar.classList.remove('active');
});


//SHOPPİNG//
const shopBtn=document.querySelector('.buttons button:nth-child(2)');
const cartContainer=document.querySelector('.cart-items-container');

shopBtn.addEventListener('click',()=>{
  cartContainer.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
});



