// Initialize an empty array to store the shopping list items
let shoppingList = [];

// Function to add a new item to the shopping list
function addItem() {
  const itemInput = document.querySelector('.item');
  const item = itemInput.value.trim(); 
  if (item !== '') {
    shoppingList.push({ name: item, purchased: false });
    itemInput.value = ''; 
    renderList();
  }
}

// Function to render the shopping list items
function renderList() {
  const shoppingListContainer = document.querySelector('.shopping-list');
  shoppingListContainer.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="${item.purchased ? 'completed' : ''}">${item.name}</span>
      <button class="purchase-button">${item.purchased ? 'Unmark' : 'Mark Purchased'}</button>
      <button class="delete-button">Delete</button>
    `;
    listItem.querySelector('.purchase-button').addEventListener('click', function() {
      shoppingList[index].purchased = !shoppingList[index].purchased; 
      renderList(); 
    });

    

    listItem.querySelector('.delete-button').addEventListener('click', function() {
      shoppingList.splice(index, 1); 
      renderList();
    });
    shoppingListContainer.appendChild(listItem);
  });
}

// Function to clear all items from the shopping list
function clearList() {
  shoppingList = []; 
  renderList(); 
}

// Event listener for the Add button
document.querySelector('.add-button').addEventListener('click', addItem);

// Event listener for the Clear List button
document.querySelector('.clear-button').addEventListener('click', clearList);

// Initial rendering of the shopping list
renderList();
