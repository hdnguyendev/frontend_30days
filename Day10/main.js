const addBtn = document.querySelector(".form button")
const ul = document.querySelector('.todos')
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
	todos.forEach((todo) => addTodo(todo))
}

function addTodo(todo) {
	const li = document.createElement('li')

	li.setAttribute('class', todo.completed ? 'completed' : '')
	li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash"></i>
    `

	li.addEventListener('click', function () {
		this.classList.toggle('completed')
		updateTodos()
	})

	li.querySelector('i').addEventListener('click', (e) => {
		e.target.parentElement.remove()
		updateTodos()
	})

	ul.appendChild(li)
	updateTodos()
}

addBtn.addEventListener("click", (e) => {
    let input = document.querySelector('.form input')
    let text = input.value
    text != '' ? addTodo({ text, completed: false }) : undefined
    input.value = ''
})
document.addEventListener("keydown", (e) => {
    if (e.code == 'Enter') {
        addBtn.click()
    }
    
})
function updateTodos() {
	const list = document.querySelectorAll('li')

	const todos = []

	list.forEach((item) => {
		todos.push({
			text: item.querySelector('span').innerHTML,
			completed: item.classList.contains('completed'),
		})
	})

	localStorage.setItem('todos', JSON.stringify(todos))
}
