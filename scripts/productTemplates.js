const product = document.querySelectorAll(".product__item")
const productTitles = document.querySelectorAll(".product__title")
const productPlays = document.querySelectorAll(".product__play")
const movieModal = document.querySelector(".movie-modal")
const video = document.querySelector(".video")
const closeModal = document.querySelector(".modal-close")

product.forEach((item, index) => {
  item.addEventListener("click", () => {
    const movie = item.getAttribute("data-value")
    video.setAttribute("src", `../movies/${movie}.mp4`)
    movieModal.classList.add("movie-modal-open");

    document.querySelector(".header").classList.add("header-hide")
    document.querySelector(".burger").classList.add("burger-hide")
  })

  item.addEventListener("mouseover", () => {
    productTitles[index].classList.add("product__title-hide")
    productPlays[index].classList.add("product__play-show")
  })

  item.addEventListener("mouseout", () => {
    productTitles[index].classList.remove("product__title-hide")
    productPlays[index].classList.remove("product__play-show")
  })
})

closeModal.addEventListener("click", () => {
  movieModal.classList.remove("movie-modal-open")
})

