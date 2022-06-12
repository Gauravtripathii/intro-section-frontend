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

//

var downArrow = document.querySelector(".down-arrow");
var upArrow = document.querySelector(".up-arrow");
var features = document.querySelector(".features");

downArrow.addEventListener("click", () => {
  downArrow.style.display = "none";
  upArrow.style.display = "block";
  features.style.display = "flex";
});
upArrow.addEventListener("click", () => {
  downArrow.style.display = "block";
  upArrow.style.display = "none";
  features.style.display = "none";
});

var downArrow2 = document.querySelector(".down-arrow2");
var upArrow2 = document.querySelector(".up-arrow2");
var company = document.querySelector(".company");

downArrow2.addEventListener("click", () => {
  downArrow2.style.display = "none";
  upArrow2.style.display = "block";
  company.style.display = "flex";
});
upArrow2.addEventListener("click", () => {
  downArrow2.style.display = "block";
  upArrow2.style.display = "none";
  company.style.display = "none";
});




if (screen.width >=1200)
{
  upArrow.style.display = "none";
  upArrow2.style.display = "none";
  features.style.display = "none";
  company.style.display = "none";
}
