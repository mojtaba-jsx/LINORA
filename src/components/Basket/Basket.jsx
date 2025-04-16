import React, { useContext } from "react";
import "./Basket.css";
import { IoCloseOutline } from "react-icons/io5";
import appContext from "../../Contexts/AppContext";
function Basket() {
  const { isShowBasketModal, setIsShowBasketModal } = useContext(appContext);
  return (
    <>
      <div
        className={`basket-overlay ${isShowBasketModal ? "active" : ""}`}
        onClick={() => setIsShowBasketModal(false)}
      ></div>
      <div className={`basket ${isShowBasketModal ? "active" : ""}`}>
        <div className="basket__header">
          <h1 className="basket__header-title">سبد خرید</h1>
          <IoCloseOutline
            className="basket__header-icon"
            onClick={() => setIsShowBasketModal(false)}
          />
        </div>

        <div className="basket__box">
          <img
            src="../../src/assets/images/basket/basket.png"
            alt=""
            className="basket__box-image"
          />
          <span className="basket__box-text">سبد خرید خالی است .</span>
        </div>

        <div className="basket__checkout">
          <a
            href="#"
            className="basket__checkout-link basket__checkout-link--disable"
          >
            <span className="basket__checkout-link-text">ادامه به پرداخت</span>
            <span className="basket__checkout-link-seperator"></span>
            <span className="basket__checkout-link-text">0.00 تومان</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Basket;
