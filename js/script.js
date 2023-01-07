let SearchForm = document.querySelector('.search-form'); // create variable and select the quries 1st /select form 1st 

document.querySelector('#search-btn').onclick = () =>    // after click icon it works active
{
    SearchForm.classList.toggle('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}



let shopping = document.querySelector('.shopping-cart'); // create variable and select the quries 1st /select form 1st 

document.querySelector('#cart-btn').onclick = () =>    // after click icon it works active
{
    shopping.classList.toggle('active');
    SearchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}



let loginform = document.querySelector('.login-form'); // create variable and select the quries 1st /select form 1st 

document.querySelector('#login-btn').onclick = () =>    // after click icon it works active
{
    loginform.classList.toggle('active');
    SearchForm.classList.remove('active');
    shopping.classList.remove('active');
    navbar.classList.remove('active');
}



// clickable for 768 px/ mobile

let navbar = document.querySelector('.navbar'); // create variable and select the quries 1st /select form 1st 

document.querySelector('#menu-btn').onclick = () =>    // after click icon it works active
{
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');
    
}

// remove for mobile

window.onscroll = () =>    // after click icon it works active
{
    SearchForm.classList.remove('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}



var swiper = new Swiper(".product-slider", 
{
    loop:true,
    spaceBetween: 20,
    autoplay:
    {
      delay:7500,
      disableOnInteraction:false,
    }, 
    breakpoints: 
    {
      0: 
      {
        slidesPerView: 1,
      },
      768: 
      {
        slidesPerView: 2,
      },
      1020: 
      {
        slidesPerView: 3,
      },
    },
});