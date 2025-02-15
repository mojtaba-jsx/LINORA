import React from "react";
import "./ReviewCard.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
function ReviewCard({ username, userImage, body, star }) {
  const renderStars = (star) => {
    const fullStars = Math.floor(star); // تعداد ستاره‌های پر
    const hasHalfStar = star % 1 !== 0; // آیا ستاره نیمه‌پر وجود دارد؟
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // محاسبه تعداد ستاره‌های خالی

    return (
      <>
        {/* ستاره‌های پر */}
        {[...Array(fullStars)].map((_, index) => (
          <FaStar
            key={`full-${index}`}
            className="review-card__top-stars-icon"
          />
        ))}
        {/* ستاره نیمه‌پر (اگر باشد) */}
        {hasHalfStar && (
          <FaStarHalfStroke className="review-card__top-stars-icon" />
        )}
        {/* ستاره‌های خالی */}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className="review-card__top-stars-icon"
          />
        ))}
      </>
    );
  };

  return (
    <div className="review-card">
      <div className="review-card__top">
        <div className="review-card__top-stars">{renderStars(star)}</div>
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
