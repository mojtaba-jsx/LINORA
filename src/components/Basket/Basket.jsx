import React from "react";
import "./Basket.css";
import { IoCloseOutline } from "react-icons/io5";
function Basket() {
  return (
    <div className="basket">
      <div className="basket__header">
        <h1 className="basket__header-title">سبد خرید</h1>
        <IoCloseOutline className="basket__header-icon" />
      </div>

      <div className="basket__box">
        <img src="./src/assets/images/basket/basket.png" alt="" className="basket__box-image" />
        <span className="basket__box-text">
          سبد خرید خالی است .
        </span>
      </div>

      <div className="basket__checkout">
        <a href="#" className="basket__checkout-link">
          ادامه به پرداخت
          <span className="basket__checkout-link-text">
            0.00 تومان 
          </span>
        </a>
      </div>
    </div>
  );
}

export default Basket;
