import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img
          src="https://th.bing.com/th/id/OIP.O5xMyBiwskPsMslqUHfFPQAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Refined Treasures Logo"
          className="logo"
        />
        <h1 className="shop-name">ℜ𝔢𝔣𝔦𝔫𝔢𝔡 𝔗𝔯𝔢𝔞𝔰𝔲𝔯𝔢𝔰</h1>
        <div className="nav-items">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <div className="dropdown">
            <button className="dropbtn">Shop</button>
            <div className="dropdown-content">
              <button>All Products</button>
              <button>Men</button>
              <button>Women</button>
              <button>Kids</button>
            </div>
          </div>
          <button className="cart-button">
            <img
              src="https://img.icons8.com/?size=50&id=9720&format=png"
              alt="Cart Icon"
              className="cart-icon"
            />
            Cart ({cartItems.length})
          </button>
        </div>
      </header>

      {}
      <div className="shopping-title-container">
        <img
          src="https://files.oaiusercontent.com/file-8Nzgytu3haqOc6ir90MYiaYN?se=2024-09-15T14%3A32%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D08f5f624-0016-4b48-88ad-a941b3dab4a4.webp&sig=AF704OCX2t1mB2U2wUPSO7XAm6LMiNPlMKWa6bgmHHE%3D"
          alt="Timeless Treasures for You"
          className="shopping-title-image"
        />

      </div>

      <main>
        <ProductList
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart}
        />
      </main>
    </div>
  );
};

export default App;
