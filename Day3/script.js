const modal = document.querySelector('#modal__main_id')

document.getElementById("btn__open--modal").addEventListener("click", toggleModal);
document.getElementsByClassName("modal__header--close")[0].addEventListener("click", toggleModal);
document.getElementsByClassName("btn--close")[0].addEventListener("click", toggleModal);

function toggleModal(){
    modal.classList.toggle("hide");
}

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})
