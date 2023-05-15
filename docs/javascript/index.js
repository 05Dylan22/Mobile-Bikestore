const closeShipping = document.querySelector(".close-shipping")
const shippingPopup = document.querySelector(".shipping-popup")
const startShopping = document.getElementById("start-shopping")
const mainMenu2 = document.querySelector(".main-menu")
const downhill2 = document.querySelector(".shop1")
const fullSus2 = document.querySelector(".shop2")
const xc2 = document.querySelector(".shop3")
const trail2 = document.querySelector(".shop4")


//display of free shipping popup
if (!sessionStorage.getItem("removed")) {
  shippingPopup.style.display = "block"
}

closeShipping.addEventListener("click", () => {
  shippingPopup.remove()
  sessionStorage.setItem("removed", "removed")
})

//start shopping btn
startShopping.addEventListener("click", () => {
  mainMenu.style.transform = "translateX(0)"
})

//popular categories
function clickedCat() {
  if(sessionStorage.getItem("json")) {
    sessionStorage.removeItem("json")
  }

  if(sessionStorage.getItem("generaljson")) {
    sessionStorage.removeItem("generaljson")
  }

  location.replace("https://05dylan22.github.io/bikestore/shoppingpage")
}

xc2.addEventListener("click", clickedXc)
trail2.addEventListener("click", clickedTrail)
fullSus2.addEventListener("click", clickedFullSus)
downhill2.addEventListener("click", clickedDownhill)

function clickedDownhill() {
  fetch("products.json").then(res => res.json()).then(data => {
    let downhillData = data.products.mountainbikes.downhillbikes
    let genDownhill = data.products.mountainbikes.downhillbikesgeneral
    sessionStorage.setItem("json", JSON.stringify(downhillData))
    sessionStorage.setItem("generaljson", JSON.stringify(genDownhill))
   })
  
   clickedCat()
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