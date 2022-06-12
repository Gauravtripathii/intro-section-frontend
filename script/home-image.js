var mobileImage = document.querySelector(".image-m");
var desktopImage = document.querySelector(".image-d");

if (screen.width <= 375)
{
    desktopImage.style.display = "none";
    mobileImage.style.display = "block";
}
else
{
    desktopImage.style.display = "block";
    mobileImage.style.display = "none";
}