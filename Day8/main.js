const form = document.querySelector(".card__form")

const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'card__form--control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'card__form--control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}
// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkRequired(inputArr) {
    let isRequired = false 
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        } else {
            showSuccess(input)
        }

        return isRequired
    });
}
// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
	} else {
		showSuccess(input)
	}
}
// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email is not valid')
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match')
	}
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3,15);
        checkLength(password,6,25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
})