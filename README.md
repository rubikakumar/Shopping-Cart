## Shopping Cart Application

A simple and elegant shopping cart application built with React.

**Table of Contents**

1. Project Overview
2. Features
3. Technologies Used
4. Setup and Installation
5. Running the Application
6. Code Explanation
7. Development Process

## Project Overview
- The Shopping Cart Application allows users to browse products, view their details, and add/remove items from the cart. The application includes a product listing page, a shopping cart feature, and multiple categories to explore.
- The live application can be accessed locally via: http://localhost:5173.

## Features 
- Responsive product display grid with categories.
- Add/Remove products to/from the cart.
- Product prices, descriptions, and images are dynamically displayed.
- Strike-through price for discounted items.
- A sleek and interactive navigation menu with Home, About, and Shop sections.
- Dropdown for product categories such as "Men," "Women," and "Kids".

## Technologies Used
- **React.js**: Manages the structure and dynamic functionality of the application.
- **CSS**: Styles the application for a modern and responsive design.
- **JavaScript**: Handles the interactive elements and state management.

## Setup and Installation
To get started with this project, follow the steps below:
1. Clone the repository:
   ```bash
   git clone https://github.com/rubikakumar/Shopping-Cart.git
2. Navigate to the project directory:
   cd Shopping-Cart
3. Install dependencies:
   npm install
4. Run the application
   npm run dev
5. Open your browser and navigate to:
   http://localhost:5173/

## Running the Application
Once the application is running, you'll be able to:
- View the list of products.
- Click on "Add to Cart" to add products to your cart.
- Click "Remove from Cart" to remove items from the cart.
- Navigate between sections like Home, About, and Shop.
- View options for product categories (Men, Women, Kids) via the dropdown menu.

## Code Explanation
The main components of the application are:
- **App.jsx**: This is the main component where the cart functionality is implemented. It also renders the product listing via ProductList.jsx.
- **ProductList.jsx**: Displays the list of products and handles adding/removing items from the cart.
- **app.css**: Contains global styles for the application.
- **ProductList.css**: Handles the styling for the product listing section.

**Key Functions:**
- addToCart(product): Adds a product to the cart.
- removeFromCart(product): Removes a product from the cart.
- isInCart(product): Checks if a product is already in the cart.

## Development Process
- A structured commit history is maintained, documenting each step of the development.
- Features were added incrementally, starting from basic product listing to cart functionality.
   
