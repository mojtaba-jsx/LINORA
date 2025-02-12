import React from "react";
import "./CategoryItem.css";
import { FaLink } from "react-icons/fa";
function CategoryItem() {
  return (
    <div className="category-item">
      <div className="category-item__image">
        <img
          src="./src/assets/images/categorySlider/eyeglasses.png"
          alt=""
          className="category-item__image"
        />
        <div className="category-item__overlay">
          <FaLink className="category-item__overlay-icon" />
        </div>
      </div>
      <span className="category-item__title">عینک</span>
    </div>
  );
}

export default CategoryItem;
