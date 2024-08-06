document.addEventListener('DOMContentLoaded', loadList);

document.getElementById('add-button').addEventListener('click', function() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        addItemToList(itemValue);
        saveList();
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
        saveList();
    });

    listItem.appendChild(removeButton);
    list.appendChild(listItem);
}

function saveList() {
    const listItems = [];
    const list = document.getElementById('grocery-list').children;
    for (let item of list) {
        listItems.push(item.textContent.replace('Remove', '').trim());
    }
    localStorage.setItem('groceryList', JSON.stringify(listItems));
}

function loadList() {
    const storedList = JSON.parse(localStorage.getItem('groceryList'));
    if (storedList) {
        storedList.forEach(item => addItemToList(item));
    }
}
