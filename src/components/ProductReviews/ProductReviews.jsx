import React from "react";
import "./ProductReviews.css";
import { FaStar } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ProductReviews() {
  const value = 4.5;
  const maxValue = 5;
  return (
    <div className="product-reviews">
      <div className="container">
        <h1 className="product-reviews__title">بررسی محصول</h1>
        <div className="product-reviews__wrapper">
          <div className="product-reviews__circle">
            <CircularProgressbar
              value={value}
              maxValue={maxValue}
              text={`${value}`}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "#4cd07f",
                trailColor: "#E0E6ED",
                textColor: "#000",
                textSize: "22px",
              })}
            />
            <div className="product-reviews__stars">
              <div className="product-reviews__stars-shapes">
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
              </div>
              از 10000 نظر
            </div>
          </div>

          <div className="product-reviews__progressbars">
            <div className="product-reviews__progressbar">
              5.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={94}
                max={100}
              ></progress>
              6000
            </div>
            <div className="product-reviews__progressbar">
              4.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={80}
                max={100}
              ></progress>
              4400
            </div>
            <div className="product-reviews__progressbar">
              3.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={60}
                max={100}
              ></progress>
              2500
            </div>
            <div className="product-reviews__progressbar">
              2.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={40}
                max={100}
              ></progress>
              800
            </div>
            <div className="product-reviews__progressbar">
              1.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={20}
                max={100}
              ></progress>
              2000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
