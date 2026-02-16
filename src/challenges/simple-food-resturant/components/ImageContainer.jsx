import React from 'react';

export default function ImageContainer() {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="hot-dog" src="./public/hotdogs.jpg" alt="Hot Dog" />
      </div>
      <div className="image-wrapper">
        <img src="./public/sandwich.jpg" alt="Sandwich" />
      </div>
      <div className="image-wrapper">
        <img src="./public/hamburger.jpg" alt="Hamburger" />
      </div>
    </div>
  );
}
