function changeColor() {
    var inputElement = document.getElementById('input');
    if (inputElement.value.trim() !== '') {
        inputElement.style.backgroundColor = 'white';
    } else {
        inputElement.style.backgroundColor = 'yellow';
    }
}

function addItem() {
    var inputElement = document.getElementById('input');
    var itemListElement = document.getElementById('itemList');

    var inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = inputValue;
        itemListElement.appendChild(listItem);
        inputElement.value = '';
        inputElement.style.backgroundColor = 'yellow';
    }
}