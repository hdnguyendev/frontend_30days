const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range__bar')

function setBar(percent) {
    rangeBar.style.width = `${percent}%`
    rangeBar.querySelector('span').innerText = `${percent}%`
	body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
    console.log(percent);

}

setBar(40)
range.addEventListener('mousemove',function (e){
    const process = e.pageX - this.offsetLeft
    let percent = (process / this.offsetWidth) * 100
    percent = Math.ceil(percent)
    setBar(percent)
})