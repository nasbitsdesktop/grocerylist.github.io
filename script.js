document.getElementById('add-button').addEventListener('click', function() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        addItemToList(itemValue);
        itemInput.value = '';
    }
});

function addItemToList(item) {
    const list = document.getElementById('grocery-list');
    const listItem = document.createElement('li');
    listItem.textContent = item;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    list.appendChild(listItem);
}
