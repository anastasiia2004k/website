console.log("adads");

const menubutton = document.querySelector(".menu-button");
const menuclosebutton = document.querySelector(".menu-close-button");
const menu = document.querySelector(".menu");


console.log(menubutton);
console.log(menu);

function toggleMenu()
{
    menu.classList.toggle("menu-open");
    menuclosebutton.classList.toggle("button-open");

}
menubutton.addEventListener("click", toggleMenu);
menuclosebutton.addEventListener("click", toggleMenu)