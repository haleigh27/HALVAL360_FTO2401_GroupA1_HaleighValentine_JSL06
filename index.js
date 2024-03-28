// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        {name:"Garlic Bread", price: 100}, 
        {name:"Bruschetta", price: 150}
    ],
    MainCourses: [
        {name: "Margherita Pizza", price: 80},
        {name: "Spaghetti Carbonara", price: 95}
        ],
    Desserts: [
        {name:"Tiramisu", price: 120}, 
        {name: "Cheesecake", price: 65}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById("menu")    
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryEl = document.createElement("h3")
        // Set the text content of the category element to the category name
        categoryEl.textContent = category
        // Append the category element to the menu container
        menuEl.appendChild(categoryEl)
        // Create an element to represent a list of items
        const listEl= document.createElement("ul")
        // Append a list of items element to the menu container
        menuEl.appendChild(listEl)
        // Loop through the items in the category and create list items
        for (let i = 0; i < items.length; i++) {
            // Create a list item element
            const itemsEl = document.createElement("li")
            // Set the text content of the list item element to the item name
            itemsEl.textContent = items[i].name
            // Attach a click event listener to the list item to add it to the order
            itemsEl.addEventListener("click", () => {
                addToOrder(items[i])
            })
            // Append the list item to the list of items
            listEl.appendChild(itemsEl)
        }   
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);