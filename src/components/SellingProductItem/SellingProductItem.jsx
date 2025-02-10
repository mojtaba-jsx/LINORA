import React from "react";
import "./SellingProductItem.css";
function SellingProductItem({ productInfo }) {
  return (
    <div className="selling-product-item">
      <div className="selling-product-item__right">
        <img
          src={productInfo.image}
          alt=""
          className="selling-product-item__right-image"
        />
      </div>

      <div className="selling-product-item__left">
        <span className="selling-product-item__left-title">
          {productInfo.title}
        </span>
        <span className="selling-product-item__left-caption">
          {productInfo.caption}
        </span>
        <span className="selling-product-item__left__prices">
          <span className="selling-product-item__left__prices-final">
            {productInfo.finalPrice} تومان
          </span>
          <span className="selling-product-item__left__prices-original">
            {productInfo.originalPrice} تومان
          </span>
        </span>
      </div>
    </div>
  );
}

export default SellingProductItem;
