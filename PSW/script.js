//NAVBAR EFFECT ON SCROLL
window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle('sticky', window.scrollY > 0);
});


//SCROLL TO TOP BUTTON
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//ONCLICK (SCROOL TO TOP)
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//POP-UP MENU
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//CLICK (OPEN)
btn.onclick = function() {
  modal.style.display = "block";
}

//WHEN CLICK ON SPAN (CLOSE)
span.onclick = function() {
  modal.style.display = "none";
}




