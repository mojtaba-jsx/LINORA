import React from "react";
import "./RelatedProductsCard.css";
import { FaStar } from "react-icons/fa";
import { HiViewfinderCircle } from "react-icons/hi2";
function RelatedProductsCard() {
  return (
    <div className="related-products-card">
      <img
        src="../src/assets/Images/special-products/1.png"
        alt=""
        className="related-products-card__image"
      />
      <h2 class="related-products-card__title">تی شرت مردانه</h2>
      <span class="related-products-card__price">100000 تومان</span>
      <div class="related-products-card__info">
        <span class="related-products-card__info-sold">100 فروخته شده</span>

        <span class="related-products-card__info-score">
          4.5
          <FaStar className="related-products-card__info-score-icon" />
        </span>
      </div>
      <button className="related-products-card__btn">
        مشاهده محصول
        <HiViewfinderCircle className="related-products-card__btn-icon" />
      </button>
    </div>
  );
}

export default RelatedProductsCard;
