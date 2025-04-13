import React from "react";
import "./ProductReviews.css";
import { FaStar } from "react-icons/fa";
function ProductReviews() {
  return (
    <div className="product-reviews">
      <div class="container">
        <h1 className="product-reviews__title">
        بررسی محصول
        </h1>
        <div class="product-reviews__wrapper">
          <div class="product-reviews__circle">
            <span class="product-reviews__circle-shape">4.5</span>
            <div class="product-reviews__stars">
              <div class="product-reviews__stars-shapes">
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
                <FaStar className="product-reviews__stars-shapes-star" />
              </div>
              از 10000 نظر
            </div>
          </div>

          <div class="product-reviews__progressbars">
            <div class="product-reviews__progressbar">
              5.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={94}
                max={100}
              ></progress>
              5000
            </div>
            <div class="product-reviews__progressbar">
              4.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={80}
                max={100}
              ></progress>
              5000
            </div>
            <div class="product-reviews__progressbar">
              3.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={60}
                max={100}
              ></progress>
              5000
            </div>
            <div class="product-reviews__progressbar">
              2.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={40}
                max={100}
              ></progress>
              5000
            </div>
            <div class="product-reviews__progressbar">
              1.0
              <FaStar className="product-reviews__progressbar-star" />
              <progress
                className="product-reviews__progressbar-star-progress"
                value={20}
                max={100}
              ></progress>
              5000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
