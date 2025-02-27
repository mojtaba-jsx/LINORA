import React from "react";
import "./StoreProduct.css";
function StoreProduct() {
  return (
    <div className="store-product">
      <img
        src="./src/assets/images/store/shoe.png"
        alt=""
        className="store-product__image"
      />
      <div className="store-product__info">
        <h4 className="store-product__info-title">کفش نایکی</h4>
        <p className="store-product__info-caption">
          کفش راحتی و مدرن که با بهترین مواد به روز تولید شده است
        </p>
        <div className="store-product__info__prices">
          <span className="store-product__info__prices-orginal">
            400/000 تومان
          </span>
          <span className="store-product__info__prices-discount">
            200/000 تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default StoreProduct;
