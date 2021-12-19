let menu = document.querySelector(".menu");
let chiudibtn = document.querySelector("#btn");
let cercabtn = document.querySelector(".bx-search");

chiudibtn.addEventListener("click", ()=>{
  menu.classList.toggle("apri");
  animazione();
});

cercabtn.addEventListener("click", ()=>{ 
  menu.classList.toggle("apri");
  animazione(); 
});

function animazione() {
 if(menu.classList.contains("apri")){
   chiudibtn.classList.replace("bx-menu", "bx-menu-alt-right");
   if (window.innerWidth < 500) resize.classList.remove("container");
 }else {
    chiudibtn.classList.replace("bx-menu-alt-right","bx-menu");
    if (window.innerWidth < 500) resize.classList.add("container");
    var header = document.getElementById("menu");
    var btns = header.getElementsByClassName("tooltip");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
 }
}

