let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}


window.onscroll = () =>{
  
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onload = () =>{

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-paralax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

   elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });
};

document.querySelector('.home').onmouseleave = () =>{

  document.querySelectorAll('.home-paralax').forEach(elm =>{

   elm.style.transform = `translateX(0px) translateY(0px)`;

  });
};

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grapCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grapCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grapCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});

var bottomPage = document.getElementById('bottomPage');
var topPage = document.getElementById('topPage');
var lastScrollTop = 0;

bottomPage.addEventListener('click', scrollBottom);
topPage.addEventListener('click', scrollTop);

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener('scroll', function(){ // or element.addEventListener('scroll'....
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    bottomPage.style.display = 'none';
    topPage.style.display = '';
  } else {
    bottomPage.style.display = '';
    topPage.style.display = 'none';
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);
function scrollBottom() {
  window.scrollTo(0,document.body.scrollHeight);
  bottomPage.style.display = 'none';
  topPage.style.display = '';
}
function scrollTop() {
  window.scrollTo(0, 0);
  topPage.style.display = 'none';
  bottomPage.style.display = '';
}




