##week2 code challenge
 ## How it Works
Used an array called shoppingList to store the list of items. Each item is an object with two properties: name and purchased. The name property stores the text of the item, and the purchased property is a boolean that indicates whether the item has been purchased or not.


## It has three main functions:

addItem(): This function is called when the user clicks the "Add" button. It gets the text input from the user, trims it, and adds it to the shoppingList array if it's not empty. It then clears the input field and calls the renderList() function to update the list.
renderList(): This function is called to render the shopping list items. It clears the list container, loops through the shoppingList array, and creates a list item for each item. Each list item contains the item name, a "Mark Purchased" or "Unmark" button, and a "Delete" button. The function also adds event listeners to the buttons.
clearList(): This function is called when the user clicks the "Clear List" button. It resets the shoppingList array and calls the renderList() function to update the list.
The app uses event listeners to respond to user interactions. There are three event listeners:

## There are three event listeners:

The "Add" button event listener calls the addItem() function when clicked.
The "Clear List" button event listener calls the clearList() function when clicked.
The "Mark Purchased" or "Unmark" button event listener toggles the purchased property of the corresponding item and calls the renderList() function to update the list.
The "Delete" button event listener removes the corresponding item from the shoppingList array and calls the renderList() function to update the list.


## The code is organized into three main sections:

The first section initializes the shoppingList array and defines the three main functions: addItem(), renderList(), and clearList().
The second section adds event listeners to the buttons.
The third section calls the renderList() function to render the initial list.