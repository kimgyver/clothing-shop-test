/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./ProductDetail.css";

const ProductDetails = ({ addToCart, setShowMiniCart }) => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      fetch(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
      )
        .then(response => response.json())
        .then(data => {
          setProduct(data);
        })
        .catch(error => {
          console.error("Error fetching product:", error);
          showError("Error fetching product. Please try again later.");
        });
    };

    // Fetch product data from API
    fetchProduct();
  }, []);

  const handleSizeSelect = size => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      showError("Please select a size.");
    } else {
      product.size = selectedSize;
      addToCart(product);
      setShowMiniCart(true);
    }
  };

  const showError = (message, type = "error") => {
    setMessages([...messages, { message, type }]);
    // Clear message after 5 seconds
    setTimeout(() => {
      const found = messages.reverse().find(x => x.message === message);
      setMessages(prevMessages => prevMessages.filter(m => m === found));
    }, 5000);
  };

  const showSuccessMessage = message => {
    showError(message, "success");
  };

  return (
    <div>
      {messages &&
        messages.map(m => (
          <Message
            message={m.message}
            type={m.type}
            key={Math.random(Date.now())}
          />
        ))}

      <div className="product-details">
        {product && (
          <>
            <div className="product-image">
              <img src={product.imageURL} alt={product.title} />
            </div>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="price">${parseFloat(product.price).toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <p className="size-title">
                Size<label className="required">*</label>
              </p>
              <div className="size-selection">
                {product.sizeOptions &&
                  product.sizeOptions.map(size => (
                    <button
                      key={size.id}
                      className={selectedSize === size.label ? "selected" : ""}
                      onClick={() => handleSizeSelect(size.label)}
                    >
                      {size.label}
                    </button>
                  ))}
              </div>
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
