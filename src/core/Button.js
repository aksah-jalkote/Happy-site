import React from "react";
import "./style.css";

const Button = ({ title }) => {
  return (
    <div>
      <button className="btn btn-lg text-white">{title}</button>
    </div>
  );
};
export default Button;

