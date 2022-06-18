import React from "react";
import "./Button.css";

const Button = ({ text, customStyle, onClick, value }) => {
  const handleClick = (e) => {
    if (onClick) onClick(value);
  };
  return (
    <button onClick={handleClick} className={customStyle}>
      {text}
    </button>
  );
};

export default Button;
