const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var tl = gsap.timeline();

function timeline1(){
  tl.from("#center-text p span", {
    x:-40,
    y: 40,
    opacity: 0,
    duration: 3
  });
  
  tl.from("#page1 #addd", {
    x:40,
    y: 10,
    opacity: 0,
    duration: 1
  }, "<"); 
  
  tl.from("#page1-top", {
    y: 10,
    opacity: 0,
    duration: 1
  }, "<"); 
}
timeline1();

tl.from("#loader h1",{
  x:3,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to("#loader h1",{
  opacity:0,
  x:-20,
  stagger:0.1,
  duration:1
})
tl.to("#loader",{
  opacity:0,
  display:"none",
  
});
setTimeout(timeline1, 4200);




var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");

  menu.addEventListener("click", function () {
    if (full.style.top === "0px") {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
    } else {
      full.style.top = 0;
      navimg.style.opacity = 0;
    }
  });
}

menuAnimation();







