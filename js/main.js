import {productList} from "./products.js"
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".icon-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shopping-cart-container");
const detailCloseIcon = document.querySelector(".product-detail-close")
const productDetailContainer = document.querySelector("#product-detail")

const cardsContainer = document.querySelector(".cards-container")

navEmail.addEventListener("click", toggleDesktopMenu);
menuIconMobile.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCartContainer);
detailCloseIcon.addEventListener("click", closeProductDetail)


function toggleDesktopMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    let productSelected = [];

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    productSelected.push()
    // showDetails(productList)
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetail() {
    productDetailContainer.classList.add("inactive")
}

function showProducts(arr) {
    arr.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProductDetail)
    
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

/*
function showDetails(arr) {
    const arrayMaped = arr.map((product) => {
        return product.name
    })

    arr.find((product) => {


        const productDetailClose = document.createElement("div")
        productDetailClose.classList.add("produc-detail-close")
        
        const xImg = document.createElement("img")
        xImg.setAttribute("src", "/src/Icons/icon_close.png")
        xImg.setAttribute("alt", "X")
        
        productDetailClose.appendChild(xImg)
        
        const detailsImage = document.createElement("img")
        detailsImage.setAttribute("src", product.image)
        detailsImage.setAttribute("alt", product.name)
        
        const dotsContainer = document.createElement("div")
        dotsContainer.classList.add("dots")
        
        const dot1 = document.createElement("div")
        const dot2 = document.createElement("div")
        const dot3 = document.createElement("div")
        dot1.classList.add("dot")
        dot2.classList.add("dot")
        dot3.classList.add("dot")
        
        dotsContainer.append(dot1, dot2, dot3)

        const productInfoContainer = document.createElement("div")
        productInfoContainer.classList.add("product-info")
        
        const detailPrice = document.createElement("p")
        detailPrice.innerText = `$${product.price}`
        const detailName = document.createElement("p")
        detailName.innerText = product.name
        const detailDescription = document.createElement("p")
        detailDescription.innerText = product.description
        
        const cartBtn = document.createElement("button")
        cartBtn.classList.add("primary-btn")
        
        const btnImg= document.createElement("img")
        btnImg.setAttribute("src", "/src/Icons/bt_add_to_cart.svg")
        
        
        cartBtn.appendChild(btnImg)
        cartBtn.innerText = "Add to cart"
        productInfoContainer.append(detailPrice, detailName, detailDescription, cartBtn)
        productDetailContainer.append(productDetailClose, detailsImage, dotsContainer, productInfoContainer)
    })
}


/* 
<div class="product-detail-close">
    <img src="src/Icons/icon_close.png" alt="x">
</div>
<img id="details-image" src="https://cdn.shopify.com/s/files/1/1040/9804/products/sitting_4_1024x1024.jpg?v=1560498522" alt="Corgi plushie">
<div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>
<div class="product-info">
    <p>$120,00</p>
    <p>Corgi plushie</p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolores, non vero aspernatur sequi fugiat, aliquam consequatur, numquam necessitatibus ipsum doloribus quidem earum impedit tempora consectetur repudiandae! Eveniet, odio magni.
    </p>
    <button class="primary-btn">
        <img src="src/Icons/bt_add_to_cart.svg" alt="Add to cart">
        Add to cart
    </button>
</div>

*/