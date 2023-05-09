const navOption1 = document.querySelector(".nav-option1")
const navOption2 = document.querySelector(".nav-option2")
const navOption3 = document.querySelector(".nav-option3")
const navSelection1 = document.querySelector(".nav-selection1")
const navSelection2 = document.querySelector(".nav-selection2")
const navSelection3 = document.querySelector(".nav-selection3")
const contents1 = document.querySelector(".contents1")
const contents2 = document.querySelector(".contents2")
const contents3 = document.querySelector(".contents3")
const arrowTop = document.getElementById("arrowTop")
const arrowMiddle = document.getElementById("arrowMiddle")
const arrowBottom = document.getElementById("arrowBottom")
const mountain2 = document.getElementById("item1")
const road2 = document.getElementById("item2")
const electric2 = document.getElementById("item3")
const parts2 = document.getElementById("item4")
const accessories2 = document.getElementById("item5")
const apparel2 = document.getElementById("item6")
const youtube = document.querySelector(".youtube")
const instagram = document.querySelector(".instagram")
const facebook = document.querySelector(".facebook")
const tiktok = document.querySelector(".tiktok")
let open1 = false
let open2 = false
let open3 = false

//open main nav titles
navSelection1.addEventListener("click", () => {
  if (!open1) {
    navOption1.style.height = "180px"
    setTimeout(() => {
      contents1.style.display = "grid"
    }, 200)
    arrowTop.style.rotate = "180deg"
    open1 = true
  } else {
    navOption1.style.height = "38px"
    setTimeout(() => {
      contents1.style.display = "none"
    }, 100)
    arrowTop.style.rotate = "0deg"
    open1 = false
  }
})

navSelection2.addEventListener("click", () => {
  if (!open2) {
    navOption2.style.height = "150px"
    setTimeout(() => {
      contents2.style.display = "grid"
    }, 200)
    arrowMiddle.style.rotate = "-180deg"
    open2 = true
  } else {
    navOption2.style.height = "38px"
    setTimeout(() => {
      contents2.style.display = "none"
    }, 200)
    arrowMiddle.style.rotate = "0deg"
    open2 = false
  }
})

navSelection3.addEventListener("click", () => {
  if (!open3) {
    navOption3.style.height = "150px"
    setTimeout(() => {
      contents3.style.display = "grid"
    }, 200)
    arrowBottom.style.rotate = "180deg"
    open3 = true
  } else {
    navOption3.style.height = "38px"
    setTimeout(() => {
      contents3.style.display = "none"
    }, 100)
    arrowBottom.style.rotate = "0deg"
    open3 = false
  }
})

//footer shop nav
mountain2.addEventListener("click", () => {
  subMountain.style.transform = "translateX(0)"
})

road2.addEventListener("click", () => {
  subRoad.style.transform = "translateX(0)"
})

electric2.addEventListener("click", () => {
  subElectric.style.transform = "translateX(0)"
})

parts2.addEventListener("click", () => {
  subParts.style.transform = "translateX(0)"
})

accessories2.addEventListener("click", () => {
  subAccessories.style.transform = "translateX(0)"
})

apparel2.addEventListener("click", () => {
  subApparel.style.transform = "translateX(0)"
})

//relocate to social medias
youtube.addEventListener("click", () => {
  window.open("https://www.youtube.com/")
})

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/")
})

facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/")
})

tiktok.addEventListener("click", () => {
  window.open("https://www.tiktok.com/")
})