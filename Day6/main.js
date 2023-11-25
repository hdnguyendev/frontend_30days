const box = document.querySelector('.box')
const eKey = document.querySelector('.box__detail--card.key .card--content')
const eLocation = document.querySelector('.box__detail--card.location .card--content')
const eWhich = document.querySelector('.box__detail--card.which .card--content')
const eCode = document.querySelector('.box__detail--card.code .card--content')

document.addEventListener('keydown', (e) => {
	let keyName = e.keyCode === 32 ? 'Space' : e.key

	document.querySelector('.box__result').innerText = e.which


	eKey.innerText = keyName
	eLocation.innerText = e.location
	eWhich.innerText = e.which
	eCode.innerText = e.code
	
})
