//Navbar items
var toggled = false;
var burger = document.getElementById("burger");
var navbar = document.getElementById("navMenuColorinfo-example")

burger.onclick = function () {
  if(toggled === false){
    toggled = true;
    navbar.className = "navbar-menu is-active"
  } else {
    toggled = false;
    navbar.className = "navbar-menu"
  }
}