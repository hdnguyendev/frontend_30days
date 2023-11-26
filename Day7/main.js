const input = document.querySelector(".box__content input")
const ul = document.querySelector(".box__content")

let tags = ['hdnguyendev', 'nodejs']
createTag();
function  createTag() {
    ul.innerHTML = '';

    tags.forEach((tag, index) => {
        let liTag = `
            <li>${tag}<i class="fa-solid fa-x" onclick="removeTag(this,'${index}')"></i></li>
        `
        ul.innerHTML += liTag
    });

    ul.appendChild(input)
    input.focus();
}

function removeTag(element, index) {
    tags.splice(index, 1);
    element.parentElement.remove();
    input.focus();
}

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        let tag = input.value.trim()
        if (tag != '' && !tags.includes(tag)) {
            tags.push(tag);
            createTag();
        }
  
        input.value = ""
    }
})


const removeBtn = document.querySelector('.box__remove')
removeBtn.addEventListener('click', () => {
	tags.length = 0
	createTag()
})
