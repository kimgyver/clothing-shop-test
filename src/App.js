import React, { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const addToCart = product => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id && item.size === product.size
    );

    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="app">
      <Header
        showMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
        cartItems={cartItems}
      />
      <div className="main-content">
        <ProductDetails
          addToCart={addToCart}
          setShowMiniCart={setShowMiniCart}
        />
      </div>
    </div>
  );
};

export default App;
