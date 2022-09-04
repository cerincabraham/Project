var menubtn = document.querySelector(".menu-btn");
menubtn.addEventListener("click", onBurgerClicked);
let menuopen = false;

function onBurgerClicked() 
{
  var mobile_menu = document.querySelector(".responsive-mobile");
  mobile_menu.classList.toggle("show-mobile");
  if(!menuopen)
  {
    menubtn.classList.add('menu-btn-open');

    menuopen=true;
  }else
  {
    menubtn.classList.remove('menu-btn-open');
    menuopen=false; 
  }
}

var servicebtn = document.querySelector(".mobile-service");

servicebtn.addEventListener("click", onMobileServiceClicked);

let serviceMenuOpen = false;

function onMobileServiceClicked(){

  var service_ListShow = document.querySelector(".mobile-servicelist");

 if(!serviceMenuOpen)
 {
  service_ListShow.classList.add("mobile-servicelist-show");
  serviceMenuOpen = true;
 }else
 {
  service_ListShow.classList.remove("mobile-servicelist-show");
  serviceMenuOpen = false;
 }
}



window.addEventListener("scroll",onScroll);

function onScroll(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",  window.scrollY> 0);
  // console.log("scrolling" + window.scrollY);
}