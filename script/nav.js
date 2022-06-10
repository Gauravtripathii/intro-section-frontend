var menuIcon = document.querySelector(".icon-menu");
var navItems = document.querySelector(".nav-items");
var closeMenuIcon = document.querySelector(".icon-close-menu");
var trans = document.querySelector(".trans");

menuIcon.addEventListener("click", () => {
  menuIcon.style.display = "none";
  navItems.className = "nav-items-visible";
  trans.style.display = "block";
});

closeMenuIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";
    navItems.className = "nav-items";
    trans.style.display = "none";
  });
