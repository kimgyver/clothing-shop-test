import React from "react";
import "./Message.css";

const Message = ({ message, type }) => {
  if (type === "success")
    return (
      <div className="success-message">
        <p>{message}</p>
      </div>
    );

  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
};

export default Message;
