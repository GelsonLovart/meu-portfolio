let menu_icon = document.querySelector('.menu');
let navbar = document.querySelector('.navbar')

menu_icon.onclick = () => {
   menu_icon.classList.toggle('.close');
   navbar.classList.toggle('active')

};