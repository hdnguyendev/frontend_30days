const input = document.querySelector('#searchBox')

function changeWeatherUI(weather) {
	const city = document.querySelector('.box__city')
	const time = document.querySelector('.box__time')
	const temperature = document.querySelector('.temperature__value')
	const shortDesc = document.querySelector('.box__desc')

	const visibility = document.querySelector('.detail__visibility span')
	const wind = document.querySelector('.detail__wind span')
	const cloud = document.querySelector('.detail__cloud span')

	city.innerHTML = weather.name + ', ' + weather.sys.country
	
	time.innerHTML = new Date().toLocaleString()
	shortDesc.innerHTML = weather.weather[0].main

	const temp = Math.round(weather.main.temp)
	temperature.innerHTML = temp

	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	cloud.innerHTML = weather.clouds.all + ' (%)'
}

input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		getWeather(e.target.value)
	}
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

	const res = await fetch(url)
	const weather = await res.json()

	changeWeatherUI(weather)
}

getWeather('HO CHI MINH')
