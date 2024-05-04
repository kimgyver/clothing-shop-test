import React from "react";
import "./MiniCart.css";

const MiniCart = ({ cartItems, setShowMiniCart }) => {
  return (
    <div className="mini-cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span>Size: {item.size}</span>
              <span>Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShowMiniCart(false)}>close</button>
    </div>
  );
};

export default MiniCart;
