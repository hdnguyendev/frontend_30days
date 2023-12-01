const btnShow = document.querySelectorAll('.container button')

btnShow.forEach((btn) => {
    btn.addEventListener('click',  (e) => {
        createToast(e.target.getAttribute('class'))
    })

})

const toasts = {
    success: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: 'This is a success message!'
    }, 
    warning: {
        icon: '<i class="fa-solid fa-circle-exclamation"></i>',
        msg: 'This is a warning message!'
    },
    error: {
        icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
        msg: 'This is a error message!'
    }
}

function createToast(status) {
    let toast = document.createElement('div')
    toast.className = `toast ${status}`
    toast.innerHTML = `
        <span>${toasts[status].icon}</span>
        <div class="toast__content">${toasts[status].msg}</div>
        <span class="countdown"></span>
    `
    document.querySelector('#toasts').appendChild(toast)
    setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toast.remove()
	}, 6000)
}
