const listProduct = document.querySelector('.list')
const filter = document.getElementById('filter');
const listItems = []
const items = document.querySelectorAll('.item')
items.forEach((item) => {
    listItems.push(item)
})

filter.addEventListener('input', (e) => {
    filterData(e.target.value);
})

function filterData(search) {
    const filteredItems = listItems.filter((item) => {
      const itemName = item.querySelector('.item__name').textContent.toLowerCase();
      return itemName.includes(search.toLowerCase());
    });
  
    displayFilteredItems(filteredItems);
  }
  
function displayFilteredItems(filteredItems) {
    listProduct.innerHTML = '';
  
    filteredItems.forEach((item) => {
      listProduct.appendChild(item);
    });
  }