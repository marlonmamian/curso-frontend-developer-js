const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambur = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHambur.addEventListener('click',toggleMovileMenu);
carrito.addEventListener('click',togglecarritoaside);
function toggleDesktopMenu(){
    const isasideclose = aside.classList.contains('inactive');
    const ismobileclose = mobilemenu.classList.contains('inactive');
    if(!isasideclose)aside.classList.add('inactive');
    if(!ismobileclose)aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMovileMenu(){
    const isasideclose = aside.classList.contains('inactive');
    const iscorreolosed = desktopMenu.classList.contains('inactive');
    if(!isasideclose)aside.classList.add('inactive');
    if(!iscorreolosed)aside.classList.add('inactive');
    mobilemenu.classList.toggle('inactive');
}
function togglecarritoaside(){
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');
    const iscorreolosed = desktopMenu.classList.contains('inactive');
    if(!ismobilemenuclosed)mobilemenu.classList.add('inactive');
    if(!iscorreolosed)desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}