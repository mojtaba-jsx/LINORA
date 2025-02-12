import React from "react";
import "./CategoryItem.css";
import { FaLink } from "react-icons/fa";
function CategoryItem({ image, title }) {
  return (
    <div className="category-item">
      <div className="category-item__image">
        <img src={image} alt="" className="category-item__image" />
        <div className="category-item__overlay">
          <FaLink className="category-item__overlay-icon" />
        </div>
      </div>
      <span className="category-item__title">{title}</span>
    </div>
  );
}

export default CategoryItem;
