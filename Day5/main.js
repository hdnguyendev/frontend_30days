const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-box__btn')

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("show")
})