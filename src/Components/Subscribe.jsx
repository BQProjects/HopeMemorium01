import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <input
        type="text"
        placeholder="Enter your Email Address"
        className="text-black placeholder:text-gray-500"
      />
      <button>Subscribe Now!</button>
    </div>
  );
};

export default Subscribe;
