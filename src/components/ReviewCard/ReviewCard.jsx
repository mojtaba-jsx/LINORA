import React from "react";
import "./ReviewCard.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
function ReviewCard({ username, userImage, body, star }) {
  return (
    <div className="review-card">
      <div className="review-card__top">
        <div className="review-card__top-stars">
          <FaRegStar className="review-card__top-stars-icon" />
          <FaStarHalfStroke className="review-card__top-stars-icon" />
          <FaStar className="review-card__top-stars-icon" />
          <FaStar className="review-card__top-stars-icon" />
          <FaStar className="review-card__top-stars-icon" />
        </div>
        <div className="review-card__top-user">
          <img src={userImage} alt="" className="review-card__top-user-image" />
          <span className="review-card__top-user-title">{username}</span>
        </div>
      </div>

      <div className="review-card__bottom">
        <p className="review-card__bottom-text">{body}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
