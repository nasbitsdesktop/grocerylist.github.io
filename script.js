document.addEventListener('DOMContentLoaded', loadText);

const textarea = document.getElementById('grocery-textarea');

textarea.addEventListener('input', saveText);

function saveText() {
    localStorage.setItem('groceryText', textarea.value);
}

function loadText() {
    const savedText = localStorage.getItem('groceryText');
    if (savedText) {
        textarea.value = savedText;
    }
}
