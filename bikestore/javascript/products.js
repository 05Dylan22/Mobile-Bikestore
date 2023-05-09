const slider = document.querySelector(".slider-container")
const dots = document.querySelectorAll(".slide-dot")
const arrow1 = document.querySelector(".arrow1")
const arrow2 = document.querySelector(".arrow2")
const stars = Array.from(document.querySelectorAll(".rating-star"))
const stars2 = Array.from(document.querySelectorAll(".star-p"))
const colors = Array.from(document.querySelectorAll(".color"))
const sizes = Array.from(document.querySelectorAll(".size"))
const sizeChart = document.querySelector(".size-chart-popup")
const whatSize = document.querySelector(".what-size")
const blurDiv = document.querySelector(".blur")
const closeSizes = document.querySelector(".close-chart")
const carouselContainer = document.querySelector(".slider-container")
const getProductInfo = sessionStorage.getItem("selectedProduct")
const productInfo = JSON.parse(getProductInfo)
const productGeneral = document.querySelector(".product-info-div")
const emptyReviewDiv = document.querySelector(".no-review-wrapper")
const filledReviewDiv = document.querySelector(".review-section-filled")
const reviewPopup = document.querySelector(".leave-review-popup")
const reviewPopup2 = document.querySelector(".leave-review-popup2")
const closeReviewing2 = document.querySelector(".close-reviewing2")
const closeReviewing = document.querySelector(".close-reviewing")
const compareP = document.querySelector(".compare-p")
const comparePopup = document.querySelector(".compare-popup")
const closeComparing = document.querySelector(".close-comparing")
const cartBtn = document.querySelector(".cart-btn")
const addedCart = document.querySelector(".added-cart")
const ssJson = JSON.parse(sessionStorage.getItem("json"))
const hearts = document.querySelector(".heart-div")
let carouselOutput = ""
let infoOutput = ""
let firstRating = ""
let ratingDetails = ""
let nonAvg = 0
let avgRating = 0
let reviewSect1 = ""
let reviewSect2 = ""
let emptyReview = ""

let wishlist2 = JSON.parse(localStorage.getItem("wishlist"))
if (wishlist2 == 0) {
  hearts.innerHTML = `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-outline.png">`
} else {
  let match = false
  for (let i = 0; i < wishlist2.length; i++) {
    if (wishlist2[i].name === (`${productInfo.name}`)) {
      match = true
    }
  }

  if (match) {
    hearts.innerHTML = `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-filled.png">`
  } else {
    hearts.innerHTML = `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-outline.png">`
  }
}


hearts.addEventListener("click", () => {
  if (hearts.innerHTML === `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-filled.png">`) {
    hearts.innerHTML = `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-outline.png">`
    for (let i = 0; i < wishlist2.length; i++) {
      if (wishlist2[i].name === (productInfo.name)) {
        wishlist2.splice(i, 1)
      }
    }
    localStorage.setItem("wishlist", `${JSON.stringify(wishlist2)}`)
  } else {
    hearts.innerHTML = `<img alt="heart outline" class="heart-img" src="/bikestore/images/heart-filled.png">`
    wishlist2.push(productInfo)
    localStorage.setItem("wishlist", `${JSON.stringify(wishlist2)}`)
  }
})


//grabs and loops through images of selected product
productInfo.images.forEach(image => {
  carouselOutput += `<div class="slide">
  <img class="slide-img" src="${image}" alt="product image">
  </div>`
})

carouselContainer.innerHTML = carouselOutput
const slides = Array.from(document.querySelectorAll(".slide"))

//initial product stars
if (productInfo.reviews == 0) {
  firstRating += `<div id="5" class="rating-star2"><p class="star-p">&#9733</p></div>
  <div id="4.5" class="rating-star">&#9733</div>
  <div id="4" class="rating-star2"><p class="star-p">&#9733</p></div>
  <div id="3.5" class="rating-star">&#9733</div>
  <div id="3" class="rating-star2"><p class="star-p">&#9733</p></div>
  <div id="2.5" class="rating-star">&#9733</div>
  <div id="2" class="rating-star2"><p class="star-p">&#9733</p></div>
  <div id="1.5" class="rating-star">&#9733</div>
  <div id="1" class="rating-star2"><p class="star-p">&#9733</p></div>
  <div id="0.5" class="rating-star">&#9733</div>`

  ratingDetails += `<p class="ratings-data">0 Reviews | <p class="ratings-data0 leave-review">Write A Review</p></p>`
} else {
  productInfo.reviews.forEach(review => {
    let ratingNums = review.rating.replace(" stars", "")
    ratingNums = Number(`${ratingNums}`)
    nonAvg += ratingNums
  })
  avgRating = nonAvg/productInfo.reviews.length
  let isActive = ""
  let isActive2 = ""
  let isActive3 = ""
  let isActive4 = ""
  let isActive5= ""
  let isActive6 = ""
  let isActive7 = ""
  let isActive8 = ""
  let isActive9 = ""
  let isActive10 = ""

  avgRating === 5 ? isActive = "active-star"
    : avgRating === 4.5 ? isActive2 ="active-star"
      : avgRating === 4 ? isActive3 = "active-star"
        : avgRating === 3.5 ? isActive4 = "active-star"
          : avgRating === 3 ? isActive5 = "active-star"
            : avgRating === 2.5 ? isActive6 = "active-star"
              :avgRating === 2 ? isActive7 = "active-star"
                : avgRating === 1.5 ? isActive8 = "active-star"
                  : avgRating === 1 ? isActive9 = "active-star"
                    : avgRating === 0.5 ? isActive10 = "active-star"
                      : console.log("Error")

  firstRating += `<div id="5" class="rating-star2 ${isActive}"><p class="star-p">&#9733</p></div>
  <div id="4.5" class="rating-star ${isActive2}">&#9733</div>
  <div id="4" class="rating-star2 ${isActive3}"><p class="star-p">&#9733</p></div>
  <div id="3.5" class="rating-star ${isActive4}">&#9733</div>
  <div id="3" class="rating-star2 ${isActive5}"><p class="star-p">&#9733</p></div>
  <div id="2.5" class="rating-star ${isActive6}">&#9733</div>
  <div id="2" class="rating-star2 ${isActive7}"><p class="star-p">&#9733</p></div>
  <div id="1.5" class="rating-star ${isActive8}">&#9733</div>
  <div id="1" class="rating-star2 ${isActive9}"><p class="star-p">&#9733</p></div>
  <div id="0.5" class="rating-star ${isActive10}">&#9733</div>`

  ratingDetails += `<p class="ratings-data">${productInfo.reviews.length} Reviews | <p class="ratings-data">${avgRating} out of 5</p></p>`
}

//sets top info
infoOutput += `<p class="name-p">${productInfo.name}</p>
<div class="rating-wrapper">
  <div class="rating-div">
    ${firstRating}
  </div>
  <div class="zero-rating-div">
    ${ratingDetails}
  </div>
</div>
<p class="price">
  ${productInfo.price}
</p>
<p class="des-p">
  ${productInfo.description}
</p>`

productGeneral.innerHTML = infoOutput

//bottom review section
if (productInfo.reviews == 0) {
  filledReviewDiv.style.display = "none"
  emptyReview += `<div class="empty-review-div"><h2>There are 0 reviews</h2><img alt="messages icon" src="https://static.vecteezy.com/system/resources/previews/000/512/952/original/message-board-glyph-black-icon-vector.jpg"><button class="leave-review2">Be the first to leave a review</button></div>`

  emptyReviewDiv.innerHTML = emptyReview
} else {
  let fiveStars = 0
  let fourStars = 0
  let threeStars = 0
  let twoStars = 0
  let oneStars = 0
  productInfo.reviews.forEach(review => {
    review.rating === "5 stars" ? fiveStars++
      : review.rating === "4 stars" ? fourStars++
        : review.rating === "3 stars" ? threeStars++
          : review.rating === "2 stars" ? twoStars++
            : oneStars++
  })

  function toPercent(starsNum) {
    return starsNum/productInfo.reviews.length * 100 + "%"
  }

  reviewSect1 += `<div class="review-topsect"><h2>Customer <br>Reviews</h2><button id="write-review">Write A Review</button></div><div class="sort-reviews"><label for="sort-opt1">5 Star</label><div id="sort-opt1" class="option-div"><div class="sort-option"></div><p>${toPercent(fiveStars)}</p></div><label for="sort-opt2">4 Star</label><div id="sort-opt2" class="option-div"><div class="sort-option"></div><p>${toPercent(fourStars)}</p></div><label for="sort-opt3">3 Star</label><div id="sort-opt3" class="option-div"><div class="sort-option"></div><p>${toPercent(threeStars)}</p></div><label for="sort-opt4">2 Star</label><div id="sort-opt4" class="option-div"><div class="sort-option"></div><p>${toPercent(twoStars)}</p></div><label for="sort-opt5">1 Star</label><div id="sort-opt5" class="option-div"><div class="sort-option"></div><p>${toPercent(oneStars)}</p></div></div>`



  productInfo.reviews.forEach(review => {
    let firstInitial = review.name.charAt(0).toUpperCase()

    review.rating === "5 stars" ? review.rating = "&#9733 &#9733 &#9733 &#9733 &#9733"
      : review.rating ==="4 stars" ? review.rating = "&#9733 &#9733 &#9733 &#9733"
        : review.rating === "3 stars" ? review.rating = "&#9733 &#9733 &#9733"
          : review.rating === "2 stars" ? review.rating = "&#9733 &#9733"
            : review.rating === "1 star" ? review.rating = "&#9733"
              : console.log("Error")

    reviewSect2 += `<div class="reviews"><div class="intro-review"><div class="reviewer-profile">${firstInitial}</div><h2>${review.title}</h2></div><div class="review-stars">${review.rating}</div><p class="reviewer-info">Submitted By: ${review.name}</p><p class="reviewer-info">From: ${review.location}</p><p class="reviewer-info">${review.time}</p><p class="review-text">${review.review}</p><div class="helpful-not"><div class="helped-button1"><p>&uarr;</p><h3 class="number-voted">0</h3></div><div class="helped-button2"><p>&darr;</p><h3 class="number-voted-down">0</h3></div></div></div>`
  })
  filledReviewDiv.innerHTML = reviewSect1 + reviewSect2

  const sortOptions = Array.from(document.querySelectorAll(".sort-option"))
  for (let i = 0; i < sortOptions.length; i++) {
    i === 0 ? sortOptions[i].style.backgroundImage = `linear-gradient(to right, rgb(255,164,28) ${toPercent(fiveStars)}, rgb(233, 233, 233) ${toPercent(fiveStars)} 100%)`
      : i === 1 ? sortOptions[i].style.backgroundImage = `linear-gradient(to right, rgb(255,164,28) ${toPercent(fourStars)}, rgb(233, 233, 233) ${toPercent(fourStars)} 100%)`
        : i === 2 ? sortOptions[i].style.backgroundImage = `linear-gradient(to right, rgb(255,164,28) ${toPercent(threeStars)}, rgb(233, 233, 233) ${toPercent(threeStars)} 100%)`
          : i === 3 ? sortOptions[i].style.backgroundImage = `linear-gradient(to right, rgb(255,164,28) ${toPercent(twoStars)}, rgb(233, 233, 233) ${toPercent(twoStars)} 100%)`
            : sortOptions[i].style.backgroundImage = `linear-gradient(to right, rgb(255,164,28) ${toPercent(oneStars)}, rgb(233, 233, 233) ${toPercent(oneStars)} 100%)`
  }
}



//voting listeners
const upVotes = Array.from(document.querySelectorAll(".number-voted"))
const downVotes = Array.from(document.querySelectorAll(".number-voted-down"))

  upVotes.forEach(upvote => {
    upvote.addEventListener("click", () => {
      upvote.textContent++
    })
  })

  downVotes.forEach(downvote => {
    downvote.addEventListener("click", () => {
      downvote.textContent++
    })
  })




//size chart
whatSize.addEventListener("click", () => {
  sizeChart.style.transform = "translateX(-50%)"
  blurDiv.style.transform = "translateX(-50%)"
})

closeSizes.addEventListener("click", () => {
  sizeChart.style.transform = "translateX(-150vw)"
  blurDiv.style.transform = "translateX(-150vw)"
})

//write review
let reviewed = false
if (productInfo.reviews == 0) {
  const leaveReview2 = document.querySelector(".leave-review2")
  const leaveReview = document.querySelector(".leave-review")

  leaveReview2.addEventListener("click", () => {
    if (!reviewed) {
      reviewPopup2.style.transform = "translateX(-50%)"
      blurDiv.style.transform = "translateX(-50%)"
    }
  })

  closeReviewing2.addEventListener("click", () => {
    reviewPopup2.style.transform = "translateX(-150vw)"
    blurDiv.style.transform = "translateX(-150vw)"
  })

  leaveReview.addEventListener("click", () => {
    if (!reviewed) {
      reviewPopup.style.transform = "translateX(-50%)"
      blurDiv.style.transform = "translateX(-50%)"
    }
  })

  closeReviewing.addEventListener("click", () => {
    reviewPopup.style.transform = "translateX(-150vw)"
    blurDiv.style.transform = "translateX(-150vw)"
  })
} else {
  const writeReview = document.getElementById("write-review")

  writeReview.addEventListener("click", () => {
    if (!reviewed) {
      reviewPopup2.style.transform = "translateX(-50%)"
      blurDiv.style.transform = "translateX(-50%)"
    }
  })

  closeReviewing2.addEventListener("click", () => {
    reviewPopup2.style.transform = "translateX(-150vw)"
    blurDiv.style.transform = "translateX(-150vw)"
  })
}

const submitReview = document.querySelector(".submit-review")
const submitReview2 = document.querySelector(".submit-review2")
submitReview.addEventListener("click", () => {
    reviewed = true
    reviewPopup.innerHTML = `<div style="display:grid; justify-content:center; align-items:center; width:100%; height:100%;"><h1 style="text-align:center;">Thank You For Your Submission.</h1></div>`
    setTimeout(() => {
      reviewPopup.style.transform = "translateX(-150vw)"
      blurDiv.style.transform = "translateX(-150vw)"
    }, 1000)
})

submitReview2.addEventListener("click", () => {
    reviewed = true
    reviewPopup2.innerHTML = `<div style="display:grid; justify-content:center; align-items:center; width:100%; height:100%;"><h1 style="text-align:center;">Thank You For Your Submission.</h1></div>`
    setTimeout(() => {
      reviewPopup2.style.transform = "translateX(-150vw)"
      blurDiv.style.transform = "translateX(-150vw)"
    }, 1000)
})


//bikestore/product slider
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0


  arrow1.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -=1
      setPositionByInex()
      activeDots()
    }
  })

  arrow2.addEventListener("click", () => {
    if (currentIndex < 2) {
      currentIndex += 1
      setPositionByInex()
      activeDots()
    }
  })

  function activeDots() {
    if (currentIndex === 0) {
      dots[0].classList.add("active-dot")
      dots[1].classList.remove("active-dot")
      dots[2].classList.remove("active-dot")
    } else if (currentIndex === 1) {
      dots[1].classList.add("active-dot")
      dots[0].classList.remove("active-dot")
      dots[2].classList.remove("active-dot")
    } else {
      dots[2].classList.add("active-dot")
      dots[1].classList.remove("active-dot")
      dots[0].classList.remove("active-dot")
    }
  }

  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate
    if (movedBy < -100 && currentIndex < slides.length - 1) {
      currentIndex += 1
    }

    if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1
    }

    setPositionByInex()

    slider.classList.remove("grabbing")

    activeDots()

    arrow1.classList.remove("sliding-arrow")
    arrow2.classList.remove("sliding-arrow")
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }

    if(currentTranslate < prevTranslate) {
      arrow2.classList.add("sliding-arrow")
      arrow1.classList.remove("sliding-arrow")
    } else if (currentTranslate > prevTranslate) {
      arrow1.classList.add("sliding-arrow")
      arrow2.classList.remove("sliding-arrow")
    }
  }

  function touchStart(index) {
    return function(event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true

      animationID = requestAnimationFrame(animation)
      slider.classList.add("grabbing")
    }
  }

  function getPositionX(event) {
    return event.type.includes("mouse") ? event.pageX
    :event.touches[0].clientX
  }

  function animation() {
    setSliderPos()
    if(isDragging) requestAnimationFrame(animation)
  }

  function setSliderPos() {
    slider.style.transform = `translateX(${currentTranslate}px)`
  }

  function setPositionByInex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPos()
  }

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (event) => {
    event.preventDefault()
  })

  if(index[0]) console.log("0")

  slide.addEventListener("touchstart", touchStart(index))
  slide.addEventListener("touchend", touchEnd)
  slide.addEventListener("touchmove", touchMove)


  slide.addEventListener("mousedown", touchStart(index))
  slide.addEventListener("mouseup", touchEnd)
  slide.addEventListener("mouseleave", touchEnd)
  slide.addEventListener("mousemove", touchMove)
})


//functionality for colors
colors.forEach((color) => {
  color.addEventListener("click", () => {
    for (let color of colors) {
      color.classList.remove("color-selected")
    }

    color.classList.add("color-selected")
  })
})


//functionality for sizes
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    for (let size of sizes) {
      size.classList.remove("size-selected")
    }
    size.classList.add("size-selected")
  })
})


//add to cart
cartBtn.addEventListener("click", () => {
  let cartNum = localStorage.getItem("cartNum")
  let productName = JSON.parse(sessionStorage.getItem("selectedProduct"))
    addedCart.style.display = "inline"
    addedCart.style.animate
    setTimeout(() => {
      addedCart.style.opacity = "0"
    }, 650)
    setTimeout(() => {
      addedCart.style.display = "none"
      addedCart.style.opacity = "1"
    }, 1150)
    localStorage.setItem(`${cartNum}`, sessionStorage.getItem("selectedProduct"))
    cartNum ++
    localStorage.setItem("cartNum", `${cartNum}`)
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
  location.replace("http://127.0.0.1:5500/bikestore/index.html")
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
        searchOuput += `<a id="${searchItemId}" href="/bikestore/product.html" class="search-result">${item}</a>`
      } else if (item.toLocaleLowerCase().includes(input) && item.includes("Bikes")) {
        searchOuput += `<a id="${searchItemId}" href="/bikestore/shoppingpage.html" class="search-result">${item}</a>`
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
let wishlist = JSON.parse(localStorage.getItem("wishlist"))
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
      wishlistOutput += `<div id="${i}" class="items-wrapper"><div class="wishlist-item"><div class="left-wish"><img class="wish-img" alt="wishlist added product" src="${wishlist[i].images[0]}"></div><div class="middle-wish"><p class="wish-name">${wishlist[i].name}</p><p class="wish-price">${wishlist[i].price}</p></div><div class="right-wish"><div class="right-wish-top"><img class="wishlist-icon" id="wish-heart" src="/bikestore/images/heart-filled.png"></div><div class="right-wish-bottom"><button id="wish-cart">Add To Cart</button></div></div></div></div>`
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
    cartContents += `<div id="${i}" class="added-item"><img id="${i}" class="remove-item" src="/bikestore/images/search.cancel.icon.png"><div class="left-cart"><img src=${cartItem.images[0]} alt="image in cart"></div><div class="middle-cart"><p class="cart-product-name">${cartItem.name}</p><p class="cart-product-price">${cartItem.price}</p></div><div class="right-cart"><p id="quantity${i}">1</p><button class="quantity-down">-</button><button class="quantity-up">+</button></div></div>`

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

  location.replace("http://127.0.0.1:5500/bikestore/bikestore/shoppingpage.html")
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

