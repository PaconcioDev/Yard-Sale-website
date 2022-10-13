import {productList} from "./products.js"
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".icon-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container")

navEmail.addEventListener("click", toggleDesktopMenu);
menuIconMobile.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

function showProducts(arr) {
    arr.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`
        
        const productName = document.createElement("p")
        productName.innerText = `${product.name}`
        
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement("figure")
    
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute("src", "/src/Icons/bt_add_to_cart.svg")
    
    
        productInfoFigure.appendChild(productImgCart)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(img, productInfo)
    
        cardsContainer.appendChild(productCard)
    }); 
}

showProducts(productList);
