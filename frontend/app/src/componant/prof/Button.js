import React from "react";
import "./Button.css"

export default function Button({ text, blue = false }) {
  return (
    <div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </div>
  );
}
