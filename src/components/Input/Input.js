import React from "react";
import "./Input.css";

const Input = ({ customStyle, mytext, customtype, name, onChange, onBlur }) => {
  return (
    <div className="main-div">
      <div className="text-above">{mytext}</div>
      <input
        className={customStyle}
        type={customtype}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
    </div>
  );
};

export default Input;
