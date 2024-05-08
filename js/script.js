
const top_bar = document.querySelector(".menu");
const quick_menu = document.querySelector(".quick_menu")

function scrollEvent() {
  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 190) {
      top_bar.classList.add("active");
      quick_menu.classList.add("active")
    } else {
      top_bar.classList.remove("active");
      quick_menu.classList.remove("active");
    }
  });
}

function init() {
  document.addEventListener("scroll", scrollEvent);
}

init();


goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", function () {
  var height = document.documentElement.scrollTop;
  if (height > 110) {
    this.document.querySelector(".gototop").style.opacity = 1;
  } else {
    this.document.querySelector(".gototop").style.opacity = 0;
  }
});

let triger = document.querySelector('.triger');
let subMenu = document.querySelector('.sub_menu');
let subBack = document.querySelector('.sub_back');
triger.addEventListener('click',function(){
  subMenu.style.display = 'block';
  subBack.style.display = 'block';
});

subBack.addEventListener('click',function(){
  subBack.style.display = 'none';
  subMenu.style.display = 'none';
})

let subClose = document.querySelector('.sub_nav_close');
subClose.addEventListener('click',function(){
  subBack.style.display = 'none';
  subMenu.style.display = 'none';
})