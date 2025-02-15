import React from "react";
import "./ReviewCard.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
function ReviewCard() {
  return (
    <div className="review-card">
      <div className="review-card__top">
        <div className="review-card__top-stars">
        <FaRegStar />
        <FaStar />
        <FaStarHalfStroke />
        </div>
        <div className="review-card__top-user">
          <img
            src="./src/assets/images/review-slider/user.png"
            alt=""
            className="review-card__top-user-image"
          />
          <span className="review-card__top-user-tile">علی کریمی</span>
        </div>
      </div>

      <div className="review-card__bottom">
        <p className="review-card__bottom-text">
          محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
