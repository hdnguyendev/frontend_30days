const images = document.querySelectorAll('.wrapper .image img')
const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelector(".gallery__img img")
const close = document.querySelector('.gallery__close')

const back = document.querySelector('.control.gallery__back') 
const next = document.querySelector('.control.gallery__next')

let currentIndex = 0
images.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index
		showGallery()
	})
})
function showGallery() {
    currentIndex == images.length - 1 ? next.classList.add("hide") : next.classList.remove("hide")
    currentIndex == 0 ? back.classList.add("hide") : back.classList.remove("hide")

    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src
}

close.addEventListener('click', () => {
	gallery.classList.remove('show')
})
next.addEventListener('click', () => {
	currentIndex != images.length - 1 ? currentIndex++ : undefined
	showGallery()
})
back.addEventListener('click', () => {
	currentIndex != 0 ? currentIndex-- : undefined
	showGallery()
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})