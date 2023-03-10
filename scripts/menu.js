let count = 0
const menu = document.querySelector(".header")
const burger = document.querySelector(".burger")
const burgerItems = document.querySelectorAll(".burger__item")

burger.addEventListener("click", () => {
  if(menu.classList.contains("header-show")) {
    menu.classList.remove("header-show")

    burger.classList.remove("burger-close")

    burgerItems[0].style.transform = "rotate(0deg)"
    burgerItems[0].style.position = "relative"
    burgerItems[1].style.transform = "rotate(0deg)"
    burgerItems[1].style.position = "relative"
    burgerItems[2].style.display = "block"
  } else {
    menu.classList.add("header-show")
    
    burger.classList.add("burger-close")

    burgerItems[0].style.transform = "rotate(45deg)"
    burgerItems[0].style.position = "absolute"
    burgerItems[1].style.transform = "rotate(-45deg)"
    burgerItems[1].style.position = "absolute"
    burgerItems[2].style.display = "none"

  }
  
})

window.addEventListener("scroll", () => {

  if(count > pageYOffset || pageYOffset < 200) {
    console.log(count + " НАВЕРХ")
    menu.classList.remove("header-hide")
    burger.classList.remove("burger-hide")
  }

  if(count < pageYOffset && count >= 200) {
    console.log(count + " ВНИЗ")
    menu.classList.add("header-hide")
    burger.classList.add("burger-hide")
  }

  if(document.querySelector(".movie-modal-open")) {
    menu.classList.add("header-hide")
    burger.classList.add("burger-hide")
  }

  count = pageYOffset
})