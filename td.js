// let inputBx = document.querySelector('#inputBx');
// let list = document.querySelector('#list');

// // Load saved items from localStorage when the page loads
// window.addEventListener('DOMContentLoaded', () => {
//     const savedItems = JSON.parse(localStorage.getItem('items'));
//     if (savedItems) {
//         savedItems.forEach(item => addItem(item));
//     }
// });

// inputBx.addEventListener("keyup",function(event){
//     if (event.key == "Enter") {
//         addItem(this.value)
//         this.value = ""
//     }
// });

// let addItem = (inputValue) => {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = `${inputValue}<i></i>`;

//     listItem.addEventListener("click", function(){
//         this.classList.toggle('done')
//         saveItems(); // Save items whenever a change is made
//     });

//     listItem.querySelector("i").addEventListener("click", function(){
//         listItem.remove();
//         saveItems(); // Save items whenever a change is made
//     });

//     list.appendChild(listItem);
//     saveItems(); // Save items whenever a change is made
// }

// // Function to save items to localStorage
// function saveItems() {
//     const items = Array.from(list.children).map(item => item.firstChild.textContent);
//     localStorage.setItem('items', JSON.stringify(items));
// }



let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

// Load saved items from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
        savedItems.forEach(item => addItem(item.text, item.done));
    }
});

inputBx.addEventListener("keyup",function(event){
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
});

let addItem = (inputValue, isDone = false) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputValue}<i></i>`;
    if (isDone) {
        listItem.classList.add('done');
    }

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
        saveItems(); // Save items whenever a change is made
    });

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
        saveItems(); // Save items whenever a change is made
    });

    list.appendChild(listItem);
    saveItems(); // Save items whenever a change is made
}

// Function to save items to localStorage
function saveItems() {
    const items = [];
    Array.from(list.children).forEach(item => {
        items.push({
            text: item.firstChild.textContent,
            done: item.classList.contains('done')
        });
    });
    localStorage.setItem('items', JSON.stringify(items));
}
