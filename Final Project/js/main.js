// Initialize the script
document.addEventListener("DOMContentLoaded", () => {
    let bal = getBalance();  // Get the balance from localStorage
    balanceDisplay(bal);     // Display the balance
    initializeAddToCartButtons(); // Initialize the cart functionality
    updateCartDisplay();     // Update the cart display

    if (window.location.pathname.includes("cart.html")) {
        loadCartOnCartPage();
    }

    if (window.location.pathname.includes("checkout.html")) {
        loadCheckoutPage();
    }
});

// Save balance to localStorage
function saveBalance(bal) {
    localStorage.setItem("balance", bal.toFixed(2)); // Save balance with 2 decimal places
}

// Retrieve balance from localStorage
function getBalance() {
    return parseFloat(localStorage.getItem("balance")) || 100.00; // Default to $100 if no balance is found
}

// Modify the balance display
function balanceDisplay(bal) {
    const displayBalance = document.getElementById("balance");
    displayBalance.innerHTML = `Your Balance: $${bal.toFixed(2)}`;
}

// Update balance and save it to localStorage
function updateBalance(bal) {
    balanceDisplay(bal);   // Update the display
    saveBalance(bal);      // Save it to localStorage
}

// Reset the balance to 100
const resetButton = document.getElementById("reset-balance");
resetButton.addEventListener("click", () => {
    updateBalance(100);  // Reset the balance to 100 and update the display
});

// Initialize total cost and cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalCost = calculateTotalCost();

// Save cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    totalCost = calculateTotalCost();
}

// Calculate total cost
function calculateTotalCost() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

// Update the displayed total cost
function updateCartDisplay() {
    const cartDisplay = document.getElementById('review-price');
    if (cartDisplay) {
        cartDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
    }
}

// Add item to cart
function addItemToCart(item) {
    cart.push(item);
    saveCart();
    updateCartDisplay();
}

// Initialize Add-to-Cart Buttons
function initializeAddToCartButtons() {
    const items = [
        { id: "plain-rice", name: "Plain Rice", price: 1.0 },
        { id: "fried-rice", name: "Fried Rice", price: 2.5 },
        { id: "fried-noodle", name: "Fried Noodle", price: 3.0 },
        { id: "noodle-soup", name: "Noodle Soup", price: 3.5 },
        { id: "fish-n-chips", name: "Fish n' Chips", price: 4.5 },
        { id: "prawn-tempura", name: "Prawn Tempura", price: 5.0 },
        { id: "chicken-wing", name: "Chicken Wing", price: 4.0 },
        { id: "pork-rib", name: "Pork Rib", price: 5.5 },
        { id: "orange-juice", name: "Orange Juice", price: 1.5 },
        { id: "coca-cola", name: "Coca Cola", price: 1.0 },
        { id: "iced-coffee", name: "Iced Coffee", price: 2.0 },
        { id: "strawberry-milkshake", name: "Strawberry Milkshake", price: 2.5 }
    ];

    items.forEach(item => {
        const button = document.getElementById(item.id);
        if (button) {
            button.addEventListener("click", () => {
                addItemToCart(item);
            });
        }
    });
}

// Initialize Cart Display on Cart Page
function loadCartOnCartPage() {
    const cartContainer = document.getElementById("cart-display");
    const displayTotal = document.getElementById("display-total");
    if (cartContainer && cart.length > 0) {
        cartContainer.innerHTML = cart.map((item, index) => `
            <div class="row border-bottom p-2 align-items-center">
                <div class="col-6 col-md-4">${item.name}</div>
                <div class="col-3 col-md-4">$${item.price.toFixed(2)}</div>
                <div class="col-3 col-md-4">
                    <button class="btn btn-dark" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join("");
    
        displayTotal.innerHTML = `<div class="bg-warning fw-bold text-center p-3">Your Total is: $${totalCost.toFixed(2)}</div>`;
        
        document.getElementById("hungry").style = "display: none";

        // Add remove functionality
        cartContainer.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", () => {
                const index = button.dataset.index;
                cart.splice(index, 1);
                saveCart();
                loadCartOnCartPage();
                updateCartDisplay();
            });
        });
    } else {
        document.getElementById("hungry").style = "display: block";
        cartContainer.innerHTML = `<p class="text-center">Your cart is empty. Add some items!</p>`;
        displayTotal.innerHTML = ''; // remove total display
    }
}

// Initialize Checkout Page
function loadCheckoutPage() {
    const checkoutContainer = document.getElementById("display-checkout");
    if (checkoutContainer && cart.length > 0) {
        document.getElementById("hungry").style = "display: none";
        let discountApplied = false;
        let discountValue = 0;

        checkoutContainer.innerHTML = `
            <h4 class="p-3">Order Summary</h4>
            <div class="container p-3">
            <ul class="list-group mb-3">
                ${cart.map(item => `<li class="list-group-item d-flex justify-content-between align-items-center">${item.name}<span>$${item.price.toFixed(2)}</span></li>`).join("")}
            </ul>
            <div class="input-group mb-3">
                <input type="text" id="discount-code" class="form-control" placeholder="Enter Discount Code">
                <button id="apply-discount" class="btn btn-dark">Apply</button>
            </div>
            <p id="discount-message" class="text-success"></p>
            <h5>Total: $<span id="total-cost">${totalCost.toFixed(2)}</span></h5>
            <button id="confirm-order" class="btn btn-danger mt-3 mb-5">Confirm Order</button>
            </div>`;

        // Discount codes
        const discountCodes = {
            "SAVE10": 0.1, // 10% off
            "SHOP20": 0.2, // 20% off
            "FIVEOFF": 5.0 // $5 off
        };

        // Apply discount logic
        const discountInput = document.getElementById("discount-code");
        const applyButton = document.getElementById("apply-discount");
        const discountMessage = document.getElementById("discount-message");
        const totalCostDisplay = document.getElementById("total-cost");

        let discountedTotal = totalCost; // Default to the original total cost

        applyButton.addEventListener("click", () => {
            const code = discountInput.value.trim().toUpperCase();
            if (discountCodes[code] && !discountApplied) {
                discountApplied = true;
                if (discountCodes[code] < 1) {
                    // Percentage discount
                    discountValue = totalCost * discountCodes[code];
                } else {
                    // Fixed amount discount
                    discountValue = discountCodes[code];
                    if(discountValue > totalCost){
                        discountValue = totalCost;
                    }
                }

                discountedTotal = totalCost - discountValue;
                totalCostDisplay.textContent = discountedTotal.toFixed(2);
                discountMessage.textContent = `Discount applied: -$${discountValue.toFixed(2)}`;
                discountMessage.classList.remove("text-danger");
                discountMessage.classList.add("text-success");
            } else if (discountApplied) {
                discountMessage.textContent = "Discount already applied.";
                discountMessage.classList.add("text-danger");
            } else {
                discountMessage.textContent = "Invalid or expired discount code.";
                discountMessage.classList.add("text-danger");
            }
        });

        // Confirm order functionality
        const confirmButton = document.getElementById("confirm-order");
        confirmButton.addEventListener("click", () => {
            // If balance falls below zero, redirect to cart for removal of items
            if ((getBalance() - discountedTotal) < 0) {
                alert("Insufficient balance! Please remove some items.");
                location.href = "/pages/cart.html";
            } else {
            alert("Your order has been placed! Thank you!");
            let bal = getBalance() - discountedTotal;  // Deduct the total cost from the balance
            updateBalance(bal);  // Save updated balance to localStorage and display
            
            cart = [];
            saveCart();
            location.href = "/";
            }
        });
    } else {
        document.getElementById("hungry").style = "display: block";
        checkoutContainer.innerHTML = `<p class="text-center pb-5">Your cart is empty. Go back and add some items!</p>`;
    }
}