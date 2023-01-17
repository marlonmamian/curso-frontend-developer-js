const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambur = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHambur.addEventListener('click',toggleMovileMenu);
carrito.addEventListener('click',togglecarritoaside);
function toggleDesktopMenu(){
    const isasideclose = shoppingCardContainer.classList.contains('inactive');
    const ismobileclose = mobilemenu.classList.contains('inactive');
    if(!isasideclose)shoppingCardContainer.classList.add('inactive');
    if(!ismobileclose)shoppingCardContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMovileMenu(){
    const isasideclose = shoppingCardContainer.classList.contains('inactive');
    const iscorreolosed = desktopMenu.classList.contains('inactive');
    if(!isasideclose)shoppingCardContainer.classList.add('inactive');
    if(!iscorreolosed)shoppingCardContainer.classList.add('inactive');
    mobilemenu.classList.toggle('inactive');
}
function togglecarritoaside(){
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');
    const iscorreolosed = desktopMenu.classList.contains('inactive');
    if(!ismobilemenuclosed)mobilemenu.classList.add('inactive');
    if(!iscorreolosed)desktopMenu.classList.add('inactive');
    shoppingCardContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}