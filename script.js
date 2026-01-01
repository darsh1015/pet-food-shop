// Function to navigate to products page
function goProducts() {
    window.location.href = 'products.html';
}

// Logic that only runs on the products.html page to load items
if (window.location.pathname.endsWith('products.html')) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; // Clear loading state
    // Loop through data.js and build cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = `card ${product.category}-card`;
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Function to handle adding items to local storage cart
function addToCart(productId) {
    const productToAdd = products.find(p => p.id === productId);
    // Get existing cart or start empty
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    // Check if item already exists
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1; // Just increase quantity
    } else {
        cart.push({ ...productToAdd, quantity: 1 }); // Add new item
    }

    // Save back to local storage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    alert(`${productToAdd.name} added to cart!`);
}