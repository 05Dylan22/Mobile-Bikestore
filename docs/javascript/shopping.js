const ss = sessionStorage.getItem("json")
const ssGeneral = sessionStorage.getItem("generaljson")
const jsonPr = JSON.parse(ss)
const genJson = JSON.parse(ssGeneral)
const shopPage = document.querySelector(".category-shop-page")
const generalContent = document.querySelector(".general-content")
const sale = document.getElementById("sale-p")
const saleDiv = document.getElementById("sale-div")
let output1 = ""
let output2 = ""
let finalPrice
let idNum = 0

//function takes sale and price values and converts to display and find new price
function saleToDisplay(x, y) {
  x = x.replace("%", "")
  x = Number(x)/100
  let cash = y.replace("$", "")
  let cash2 = cash.replace(",", "")
  finalPrice = cash2 - (cash2 * x)
  finalPrice = Number.parseFloat(finalPrice).toFixed(2)
  finalPrice = `${finalPrice}`
    if (finalPrice.length === 7) {
      finalPrice = finalPrice.slice(0,1) + "," + finalPrice.slice(1,7)
    } else if (finalPrice.length === 8) {
      finalPrice = finalPrice.slice(0,2) + "," + finalPrice.slice(2,8)
    }
  finalPrice = "$" + finalPrice
}

//displays general page info
output1 += `<div class="pageimg-div"> <img class="page-img" src=${genJson.pageimg}> <h1 class="page-title">Shop All ${genJson.category} ${genJson.type}'s</h1> </div> <div class="page-description-div"> <p class="page-description">${genJson.pagedescription}</p> </div> <h1 class="page-intro-header">Explore All ${genJson.category} ${genJson.type}'s</h1>`
 
//loops through each product then asigns in html
jsonPr.forEach(item => {
  let saleContent = ""
  let salePrice = ""

  if (item.sale !== "") {
    saleToDisplay(item.sale, item.price)
    saleContent += `<div class="sale-div" id="sale-div"><p class="sale-p" id="sale-p">${item.sale} Off</p> </div>`

    salePrice += `<div class="show-sale-price"><p class="before-price">${item.price}</p><p class="final-price">${finalPrice}</p></div>`

    output2 += `<div class="showcase-product-div"> <div class="product-img-div"> <img class="showcase-img" src=${item.images[0]}> <div class="heart-div" id="${idNum}"><img alt="heart outline" class="heart-img" src="images/heart-outline.png"></div> ${saleContent}</div> <div class="product-info"> <p class="product-name">${item.name}</p> <div class="sale-name-price"><p class="price-type">${item.make} &#124; ${salePrice}</p></div> <button id="${idNum}" class="view-product">View ${item.type}</button> </div> </div>`
  } else {
    output2 += `<div class="showcase-product-div"> <div class="product-img-div"> <img class="showcase-img" src=${item.images[0]}><div class="heart-div" id="${idNum}"><img alt="heart outline" class="heart-img" src="images/heart-outline.png"></div></div> <div class="product-info"> <p class="product-name">${item.name}</p> <p class="price-type">${item.make} &#124; ${item.price} </p> <button id="${idNum}" class="view-product">View ${item.type}</button> </div> </div>`
  }

  idNum++
})

//adds content to page
generalContent.innerHTML = output1
shopPage.innerHTML = output2


//functionality for heart button
const hearts = Array.from(document.querySelectorAll(".heart-div"))
let wishlist = JSON.parse(localStorage.getItem("wishlist"))

for (let i = 0; i < wishlist.length; i++) {
  hearts.forEach(heart => {
    if (wishlist[i].name === (`${(jsonPr[heart.getAttribute("id")].name)}`)) {
      heart.innerHTML = `<img alt="heart outline" class="heart-img" src="images/heart-filled.png">`
    }
  })
}


hearts.forEach(heart => {

  heart.addEventListener("click", () => {
    if (heart.innerHTML === `<img alt="heart outline" class="heart-img" src="images/heart-filled.png">`) {
      heart.innerHTML = `<img alt="heart outline" class="heart-img" src="images/heart-outline.png">`
      for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].name === (jsonPr[heart.getAttribute("id")].name)) {
          wishlist.splice(i, 1)
        }
      }
      localStorage.setItem("wishlist", `${JSON.stringify(wishlist)}`)
    } else {
      heart.innerHTML = `<img alt="heart outline" class="heart-img" src="images/heart-filled.png">`
      wishlist.push(jsonPr[heart.getAttribute("id")])
      localStorage.setItem("wishlist", `${JSON.stringify(wishlist)}`)
    }
  })
})


//adds functionality to view button
const viewProduct = Array.from(document.querySelectorAll(".view-product"))

viewProduct.forEach((product) => {
  product.addEventListener("click", () => {
    if(sessionStorage.getItem("selectedProduct")) {
      sessionStorage.removeItem("selectedProduct")
    }

  let productId = product.getAttribute("id") 
  sessionStorage.setItem("selectedProduct", JSON.stringify(jsonPr[productId]))
  location.replace("https://05dylan22.github.io/bikestore/bikestore/product")
  })
})





const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeMainmenu = document.querySelector(".close-mainmenu")
const closeSubMountain = document.querySelector(".close-mountain")
const mainMenu = document.querySelector(".main-menu")
const mountain = document.getElementById("mountain-cat")
const subMountain = document.querySelector(".sub-mountain")
const road = document.getElementById("road-cat")
const subRoad = document.querySelector(".sub-road")
const closeSubRoad = document.querySelector(".close-road")
const electric = document.getElementById("electric-cat")
const subElectric = document.querySelector(".sub-electric")
const closeSubElectric = document.querySelector(".close-electric")
const parts = document.getElementById("parts-cat")
const subParts = document.querySelector(".sub-parts")
const closeSubParts = document.querySelector(".close-parts")
const accessories = document.getElementById("accessories-cat")
const subAccessories = document.querySelector(".sub-accessories")
const closeSubAccessories = document.querySelector(".close-accessories")
const apparel = document.getElementById("apparel-cat")
const subApparel = document.querySelector(".sub-apparel")
const closeSubApparel = document.querySelector(".close-apparel")
const profileIcon = document.querySelector(".profile-icon")
const closeProfile = document.querySelector(".close-profile-popup")
const profilePopup = document.querySelector(".profile-popup")
const wishlistIcon = document.querySelector(".wishlist-icon")
const fullSus = document.getElementById("full-suspension")
const hardtail = document.getElementById("hardtail")
const xc = document.getElementById("cross-country")
const trail = document.getElementById("trail")
const enduro = document.getElementById("enduro")
const downhill = document.getElementById("downhill")
const fat = document.getElementById("fat-bikes")
const header = document.querySelector(".movable-header")
const cartIcon = document.querySelector(".cart-icon")
const cartHeader = document.querySelector(".cart-header")
const closeCart = document.querySelector(".close-cart")
const cartWrapper = document.querySelector(".cart-wrapper")
const emptyCart = document.querySelector(".empty-cart")
const removeItem = document.querySelector(".remove-item")
const wishlistContents = document.querySelector(".wishlist-contents")
const wishlistPage = document.querySelector(".wishlist-page")
const searchIcon = document.querySelector(".search-icon")
const mainHeader = document.querySelector(".header")
const searchHeader = document.querySelector(".header-2")
const closeSearch = document.querySelector(".close-search")
const searchBar = document.querySelector(".search-inventory")
const searchContents =document.querySelector(".search-contents")
const logoImg = document.querySelector(".logo-img")
const searchPage = document.querySelector(".search-page")
let searchOuput = ""

//logo click return to home page
logoImg.addEventListener("click", () => {
  location.replace("https://05dylan22.github.io/bikestore/bikestore/")
})

//hamburger menu popups
hamburgerMenu.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
})

closeMainmenu.addEventListener("click", () => {
  mainMenu.style.transform =  "translateX(-100vw)"
})

mountain.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subMountain.style.transform = "translateX(0)"
})

closeSubMountain.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subMountain.style.transform =  "translateX(100vw)"
})

road.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subRoad.style.transform = "translateX(0)"
})

closeSubRoad.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subRoad.style.transform =  "translateX(100vw)"
})

electric.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subElectric.style.transform = "translateX(0)"
})

closeSubElectric.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subElectric.style.transform =  "translateX(100vw)"
})

parts.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subParts.style.transform = "translateX(0)"
})

closeSubParts.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subParts.style.transform =  "translateX(100vw)"
})

accessories.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subAccessories.style.transform = "translateX(0)"
})

closeSubAccessories.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subAccessories.style.transform =  "translateX(100vw)"
})

apparel.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(-100vw)"
  subApparel.style.transform = "translateX(0)"
})

closeSubApparel.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
  subApparel.style.transform =  "translateX(100vw)"
})

//profile popup
profileIcon.addEventListener("click", () => {
  profilePopup.style.transform = "translateY(0)"
})

function profileHam() {
  profilePopup.style.transform = "translateY(0)"
}

closeProfile.addEventListener('click', () => {
  profilePopup.style.transform = "translateY(100vh)"
})

//search bar popup
let searchItemId = 0
searchIcon.addEventListener("click", () => {
  searchPage.style.transform = "translateY(0)"
  searchBar.style.width = "75vw"
  searchBar.classList.add("normal-width")
  searchHeader.classList.toggle("hidden")
  searchHeader.classList.remove("header-opacity")
  mainHeader.classList.toggle("header-opacity")
  searchBar.focus()
  setTimeout(() => {
    mainHeader.classList.toggle("hidden")
    searchBar.classList.remove("normal-width")
  }, 900)
})

closeSearch.addEventListener("click", () => {
  searchPage.style.transform = "translateY(-115vh)"
  searchBar.classList.add("reverse-width")
  searchBar.style.width = "20vw"
  mainHeader.classList.toggle("hidden")
  mainHeader.classList.remove("header-opacity")
  searchHeader.classList.add("header-opacity")
  setTimeout(() => {
    searchHeader.classList.toggle("hidden")
    searchBar.classList.remove("reverse-width")
  }, 900)
})

fetch("products.json").then(res => res.json()).then(data => {
  searchBar.addEventListener("input", () => {
    let input = searchBar.value.toLowerCase()
    searchOuput = ""
    searchItemId = 0
    for (let i = 0; i < data.searchableterms.length; i++) {
      let item = data.searchableterms[i].name
      if (item.toLocaleLowerCase().includes(input) && !item.includes("Bikes")) {
        searchOuput += `<a id="${searchItemId}" href="https://05dylan22.github.io/bikestore/bikestore/product" class="search-result">${item}</a>`
      } else if (item.toLocaleLowerCase().includes(input) && item.includes("Bikes")) {
        searchOuput += `<a id="${searchItemId}" href="https://05dylan22.github.io/bikestore/bikestore/shoppingpage" class="search-result">${item}</a>`
      } else {
        searchOuput += ""
      }
      searchItemId++
    }
    
    searchContents.innerHTML = searchOuput
    let searchItems = Array.from(document.querySelectorAll(".search-result"))
    searchItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (item.textContent.includes("Bikes")) {
          let findItem = item.textContent.toLocaleLowerCase()
          findItem = findItem.replaceAll(" ", "")
          if (findItem === "downhillbikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.downhillbikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.downhillbikesgeneral))
          } else if (findItem === "fatbikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.fatbikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.fatbikesgeneral))
          } else if (findItem === "crosscountrybikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.crosscountrybikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.crosscountrybikesgeneral))
          } else if (findItem === "trailbikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.trailbikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.trailbikesgeneral))
          } else if (findItem === "endurobikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.endurobikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.endurobikesgeneral))
          } else if (findItem === "fullsuspensionbikes") {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.fullsuspensionbikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.fullsuspensionbikesgeneral))
          } else {
            sessionStorage.setItem("json", JSON.stringify(data.products.mountainbikes.hardtailbikes))
            sessionStorage.setItem("generaljson", JSON.stringify(data.products.mountainbikes.hardtailbikesgeneral))
          }

        } else {
          let pushStorage = JSON.stringify(data.searchableterms[item.getAttribute("id")])
          sessionStorage.setItem("selectedProduct", `${pushStorage}`)
        }
      })
    })
  }) 
})



//wishlist popup
wishlist = JSON.parse(localStorage.getItem("wishlist"))
let openWishlist = false
let wishHearts
let wishCarts
let heartHTML
let totalItems


function wishlistHTML() {
  let wishlistOutput = ""
  let topItems = ""
  let emptyWish = ""
  if (wishlist.length !== 0) {
    topItems = `<h1 class="wishlist-heading">My Wishlist</h1><p class="wishlist-subhead">${wishlist.length} ITEMS</p>`
  
    
  
    for (let i = 0; i < wishlist.length; i++) {
      wishlistOutput += `<div id="${i}" class="items-wrapper"><div class="wishlist-item"><div class="left-wish"><img class="wish-img" alt="wishlist added product" src="${wishlist[i].images[0]}"></div><div class="middle-wish"><p class="wish-name">${wishlist[i].name}</p><p class="wish-price">${wishlist[i].price}</p></div><div class="right-wish"><div class="right-wish-top"><img class="wishlist-icon" id="wish-heart" src="images/heart-filled.png"></div><div class="right-wish-bottom"><button id="wish-cart">Add To Cart</button></div></div></div></div>`
    }
  
    wishlistContents.innerHTML = topItems + wishlistOutput
  } else {
    emptyWish = `<div id="empty-wishlist"><h1 class="wishlist-heading">My Wishlist</h1><p class="wishlist-subhead"> 0 ITEMS</p><p class="wishlist-paragraph">You haven't saved any items to your wishlist yet. Start shopping and save your favorite items.</p><div class="recommended-div"><h1 class="recommended-h1">Checkout Our Best Hits</h1><div class="recommended-slider"><div id="r-img1" class="r-slide"></div><div id="r-img2" class="r-slide"></div><div id="r-img3" class="r-slide"></div><div id="r-img4" class="r-slide"></div><div id="r-img5" class="r-slide"></div></div></div></div></div>`
  
    wishlistContents.innerHTML = emptyWish
  }

wishHearts = Array.from(document.querySelectorAll("#wish-heart"))
wishCarts = Array.from(document.querySelectorAll("#wish-cart"))
heartHTML = document.querySelector(".right-wish-top")
totalItems = document.querySelector(".wishlist-subhead")

wishHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    setTimeout(() => {
      heart.parentElement.parentElement.parentElement.style.opacity = "0"
    }, 200)

    setTimeout(() => {
      wishlist.splice(`${heart.parentElement.parentElement.parentElement.parentElement.getAttribute("id")}`, 1)
      localStorage.setItem("wishlist", `${JSON.stringify(wishlist)}`)
      wishlistHTML()
      heart.parentElement.parentElement.parentElement.parentElement.remove()
    }, 1750)
  })
})

wishCarts.forEach(cart => {
  cart.addEventListener("click", () => {
    let parentId = cart.parentElement.parentElement.parentElement.parentElement.getAttribute("id")
    setTimeout(() => {
      cart.parentElement.parentElement.parentElement.style.opacity = "0"
    }, 200)

    setTimeout(() => {
      let cartNum = localStorage.getItem("cartNum")
      localStorage.setItem(`${cartNum}`, `${JSON.stringify(wishlist[parentId])}`)
      cartNum ++
      localStorage.setItem("cartNum", `${cartNum}`)
      wishlist.splice(`${parentId}`, 1)
      localStorage.setItem("wishlist", `${JSON.stringify(wishlist)}`)
      wishlistHTML()
      cart.parentElement.parentElement.parentElement.remove()
    }, 1750)
  })
})
}
wishlistHTML()
  

wishlistIcon.addEventListener("click", () => {
  wishlistOpen()
})

function wishlistOpen() {
  if (!openWishlist) {
    mainHeader.style.zIndex = "101"
    wishlistPage.style.transform = "translateY(0)"
    openWishlist = true
  } else {
    wishlistPage.style.transform = "translateY(-115vh)"
    mainHeader.style.zIndex = "100"
    openWishlist = false
  }
}


//cart popup
let upQuantities
function cartHTML() {
  let subtotal = 0
  let cash
  let cartLength = Number(localStorage.getItem("cartNum"))
  const filledCart = document.querySelector(".cart-div")
  let cartContents = ""
  let totals = ""
  let cartDivContents = ""
  if (localStorage.getItem(0) !== null) {
  let cartItem
  for (let i = 0; i < cartLength; i++) {
    cartItem = JSON.parse(localStorage.getItem(`${i}`))
    cartContents += `<div id="${i}" class="added-item"><img id="${i}" class="remove-item" src="images/search.cancel.icon.png"><div class="left-cart"><img src=${cartItem.images[0]} alt="image in cart"></div><div class="middle-cart"><p class="cart-product-name">${cartItem.name}</p><p class="cart-product-price">${cartItem.price}</p></div><div class="right-cart"><p id="quantity${i}">1</p><button class="quantity-down">-</button><button class="quantity-up">+</button></div></div>`

    cash = cartItem.price
    cash = cash.replace("$", "")
    cash = cash.replace(",", "")
    cash = Number(cash)
    subtotal += cash
  }
  subtotal = subtotal.toFixed(2)
  let totalTaxes = cash * 0.08
  totalTaxes = totalTaxes.toFixed(2)
  let run = 0
  numToDollar(subtotal)
  numToDollar(totalTaxes)

  function numToDollar(convertNum) {
    convertNum = `${convertNum}`
    if (convertNum.length === 7) {
      convertNum = convertNum.slice(0,1) + "," + convertNum.slice(1,7)
    } else if (convertNum.length === 8) {
      convertNum = convertNum.slice(0,2) + "," + convertNum.slice(2,8)
    }
    convertNum = "$" + convertNum

    if (run === 0) {
      subtotal = convertNum
    } else {
      totalTaxes = convertNum
    }
    run++
  }

  totals = `<div class="cart-total"><div class="taxes-total"><p class="taxes">Taxes: ${totalTaxes}</p><p class="subtotal">Subtotal: ${subtotal}</p></div><div class="cart-checkout"><button class="checkout-btn"><div class="checkout-txt">Checkout</div><div class="checkout-arrow">	&rarr;</div></button></div></div>`

  cartDivContents = `<div class="cart-div">${cartContents + totals}</div>`
  let cartDiv = filledCart.innerHTML
  cartDiv = cartDivContents
  cartWrapper.innerHTML = cartDiv
} else {
  cartContents = `<div class="empty-div"><h2 class="empty-title">Your Cart Is Empty</h2><h3 class="empty-subtitle">Add Your Favorite Items Before Checking Out</h3><div class="recommended-div"><h1 class="recommended-h1">Checkout Our Best Hits</h1><div class="recommended-slider"><div id="r-img1" class="r-slide"></div><div id="r-img2" class="r-slide"></div><div id="r-img3" class="r-slide"></div><div id="r-img4" class="r-slide"></div><div id="r-img5" class="r-slide"></div></div></div></div>`
  cartWrapper.innerHTML = cartContents
}

//cart checkout
if (localStorage.getItem(0) !== null) {
  let checkoutBtn = document.querySelector(".checkout-btn")
  checkoutBtn.addEventListener("click", () => {
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: [
          {id:1},
          {id:2}
        ]
      })
    }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
      window.location = url
    }).catch(e => {
      console.error(e.error)
    })
  })
}
//end cart checkout

let addedItems = Array.from(document.querySelectorAll(".added-item"))
let closeItem = Array.from(document.querySelectorAll(".remove-item"))
upQuantities = Array.from(document.querySelectorAll(".quantity-up"))
let downQuantities = Array.from(document.querySelectorAll(".quantity-down"))

closeItem.forEach((closer) => {
  let clickedId
  closer.addEventListener("click", () => {
    clickedId = Number(closer.getAttribute("id"))
    closer.parentElement.remove()
    localStorage.removeItem(`${clickedId}`)
    cartLength--
    localStorage.setItem("cartNum", cartLength)
    if (localStorage.getItem("cartNum") === "0") {
      localStorage.removeItem("0")
      cartContents = `<div class="empty-div"><h2 class="empty-title">Your Cart Is Empty</h2><h3 class="empty-subtitle">Add Your Favorite Items Before Checking Out</h3><div class="recommended-div"><h1 class="recommended-h1">Checkout Our Best Hits</h1><div class="recommended-slider"><div id="r-img1" class="r-slide"></div><div id="r-img2" class="r-slide"></div><div id="r-img3" class="r-slide"></div><div id="r-img4" class="r-slide"></div><div id="r-img5" class="r-slide"></div></div></div></div>`
      cartWrapper.innerHTML = cartContents
    }

    closeItem.forEach((item) => {
      let identity = Number(item.getAttribute("id"))
      if (identity > clickedId) {
        item.id = Number(item.getAttribute("id")) - 1
        let itemData = localStorage.getItem(`${identity}`)
        if (itemData === null) {
          localStorage.removeItem(`${identity}`)
          return
        }
        localStorage.removeItem(`${identity}`)
        identity--
        localStorage.setItem(`${identity}`, `${itemData}`)
      }
    })
    cartHTML()
  })
})

  upQuantities.forEach((upButton) => {
    upButton.addEventListener("click", (e) => {
    let hitButton = e.target.parentElement.parentElement.getAttribute("id")
    let quantityValue = document.getElementById(`quantity${hitButton}`)
    let value = Number(quantityValue.textContent)
    value++
    quantityValue.innerHTML = value
    })
  })

  downQuantities.forEach((downButton) => {
    downButton.addEventListener("click", (e) => {
      let hitButton = e.target.parentElement.parentElement.getAttribute("id")
      let quantityValue = document.getElementById(`quantity${hitButton}`)
      let value = Number(quantityValue.textContent)
    if (value > 0) {
      value--
      quantityValue.innerHTML = value
    }
    })
  })
}


cartIcon.addEventListener("click", () => {
  cartIconClicked()
})

function cartIconClicked() {
  header.style.transform = "translateX(-100vw)"
  cartHeader.style.transform = "translateX(0)"
  cartWrapper.style.transform = "translateX(0)"

  if (localStorage.getItem("cartNum") === "0") {
    cartContents = `<div class="empty-div"><h2 class="empty-title">Your Cart Is Empty</h2><h3 class="empty-subtitle">Add Your Favorite Items Before Checking Out</h3><div class="recommended-div"><h1 class="recommended-h1">Checkout Our Best Hits</h1><div class="recommended-slider"><div id="r-img1" class="r-slide"></div><div id="r-img2" class="r-slide"></div><div id="r-img3" class="r-slide"></div><div id="r-img4" class="r-slide"></div><div id="r-img5" class="r-slide"></div></div></div></div>`
    cartWrapper.innerHTML = cartContents
  } else {
    cartHTML()
  }
}




closeCart.addEventListener("click", () => {
  header.style.transform = "translateX(0)"
  cartHeader.style.transform = "translateX(100vw)"
  cartWrapper.style.transform = "translateX(100vw)"
})



//opening categories in shopping page html

fullSus.addEventListener("click", clickedFullSus)
hardtail.addEventListener("click", clickedHardtail)
xc.addEventListener("click", clickedXc)
trail.addEventListener("click", clickedTrail)
enduro.addEventListener("click", clickedEnduro)
downhill.addEventListener("click", clickedDownhill)
fat.addEventListener("click", clickedFat)

function clickedCat() {
  if(sessionStorage.getItem("json")) {
    sessionStorage.removeItem("json")
  }

  if(sessionStorage.getItem("generaljson")) {
    sessionStorage.removeItem("generaljson")
  }

  location.replace("https://05dylan22.github.io/bikestore/bikestore/shoppingpage")
}

function clickedFullSus() {
 fetch("products.json").then(res => res.json()).then(data => {
  let fullSusData = data.products.mountainbikes.fullsuspensionbikes
  let genFullSus = data.products.mountainbikes.fullsuspensionbikesgeneral
  sessionStorage.setItem("json", JSON.stringify(fullSusData))
  sessionStorage.setItem("generaljson", JSON.stringify(genFullSus))
 })

 clickedCat()
}

function clickedHardtail() {
 fetch("products.json").then(res => res.json()).then(data => {
  let hardtailData = data.products.mountainbikes.hardtailbikes
  let genHardtail = data.products.mountainbikes.hardtailbikesgeneral
  sessionStorage.setItem("json", JSON.stringify(hardtailData))
  sessionStorage.setItem("generaljson", JSON.stringify(genHardtail))
 })

 clickedCat()
}

function clickedXc() {
  fetch("products.json").then(res => res.json()).then(data => {
    let xcData = data.products.mountainbikes.crosscountrybikes
    let genXc = data.products.mountainbikes.crosscountrybikesgeneral
    sessionStorage.setItem("json", JSON.stringify(xcData))
    sessionStorage.setItem("generaljson", JSON.stringify(genXc))
   })
  
   clickedCat()
}

function clickedTrail() {
  fetch("products.json").then(res => res.json()).then(data => {
    let trailData = data.products.mountainbikes.trailbikes
    let genTrail = data.products.mountainbikes.trailbikesgeneral
    sessionStorage.setItem("json", JSON.stringify(trailData))
    sessionStorage.setItem("generaljson", JSON.stringify(genTrail))
   })
  
   clickedCat()
}

function clickedEnduro() {
  fetch("products.json").then(res => res.json()).then(data => {
    let enduroData = data.products.mountainbikes.endurobikes
    let genEnduro = data.products.mountainbikes.endurobikesgeneral
    sessionStorage.setItem("json", JSON.stringify(enduroData))
    sessionStorage.setItem("generaljson", JSON.stringify(genEnduro))
   })
  
   clickedCat()
}

function clickedDownhill() {
  fetch("products.json").then(res => res.json()).then(data => {
    let downhillData = data.products.mountainbikes.downhillbikes
    let genDownhill = data.products.mountainbikes.downhillbikesgeneral
    sessionStorage.setItem("json", JSON.stringify(downhillData))
    sessionStorage.setItem("generaljson", JSON.stringify(genDownhill))
   })
  
   clickedCat()
}

function clickedFat() {
  fetch("products.json").then(res => res.json()).then(data => {
    let fatData = data.products.mountainbikes.fatbikes
    let genFat = data.products.mountainbikes.fatbikesgeneral
    sessionStorage.setItem("json", JSON.stringify(fatData))
    sessionStorage.setItem("generaljson", JSON.stringify(genFat))
   })
  
   clickedCat()
}

