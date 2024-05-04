import React from "react";
import "./Header.css";
import MiniCart from "./Minicart";

const Header = ({ showMiniCart, setShowMiniCart, cartItems }) => {
  const toggleMiniCart = () => {
    setShowMiniCart(!showMiniCart);
  };

  return (
    <header className="header">
      <div className="logo">Clothing Store</div>
      <div className="cart-icon" onClick={toggleMiniCart}>
        Cart
      </div>
      {showMiniCart && (
        <MiniCart cartItems={cartItems} setShowMiniCart={setShowMiniCart} />
      )}
    </header>
  );
};

export default Header;
