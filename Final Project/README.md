# Little Shop: E-Commerce Web Application
## Project Overview
Little Shop is an e-commerce web application that allows users to browse a menu of food items, add them to a cart, view their cart, and proceed to checkout. Users can also view their balance, reset it, and explore the website's pages such as Home, About, Cart, and Checkout.

This project uses Bootstrap for responsive design and JavaScript for client-side functionality, with balance management stored in localStorage for persistence.


## Features
* Product Menu: Displays a variety of food items, each with its price.
* Cart Management: Users can add or remove items from their cart and view the total price.
* Balance Management: Users have a virtual balance displayed, which can be reset to $100.
* Checkout: Users can view their cart and proceed to checkout.
* Responsive Design: Fully responsive, built with Bootstrap, works well on all screen sizes.

# Tech Stack
## Frontend:
* HTML
* CSS (Bootstrap 5)
* JavaScript

## Libraries:
* Bootstrap 5 (For styling)
* Bootstrap Icons (For icons)

# File Structure
* /index.html (Main page)
* /pages/cart.html (Cart page)
* /pages/checkout.html (Checkout page)
* /pages/about.html (About page)
* /js/main.js (JavaScript for functionality)
* /images (Images for menu items)
* /README.md (Project documentation)
* /Final Project Documentation (PDF documentation)

# Usage
## Balance Management: 
* The current balance is displayed at the top of the page.
* The balance can be reset to $100 by clicking the Reset button.

## Adding Items to Cart:
* Each item on the menu has an "Add to Cart" button.
* Click the button to add the item to your cart.

## Viewing Cart:
* Navigate to the Cart page to see all items in the cart.
* The cart displays each item, its price, and the option to remove items.

## Checkout:
* The Checkout page shows the items in the cart and the total price.
* Clicking the Checkout button will confirm the order and deduct the discounted money from the balance.
