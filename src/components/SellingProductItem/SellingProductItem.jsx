import React from "react";
import "./SellingProductItem.css";
function SellingProductItem() {
  return (
    <div className="selling-product-item">
      <div className="selling-product-item__right">
        <img
          src="./src/assets/images/SellingProductsImages/watch.png"
          alt=""
          className="selling-product-item__right-image"
        />
      </div>

      <div className="selling-product-item__left">
        <span className="selling-product-item__left-title">
          ساعت استیل RedQ
        </span>
        <span className="selling-product-item__left-caption">
          ساعت های با کیفت و ...
        </span>
        <span className="selling-product-item__left__prices">
          <span className="selling-product-item__left__prices-final">
            2000000 تومان
          </span>
          <span className="selling-product-item__left__prices-original">
            1400000 تومان
          </span>
        </span>
      </div>
    </div>
  );
}

export default SellingProductItem;
