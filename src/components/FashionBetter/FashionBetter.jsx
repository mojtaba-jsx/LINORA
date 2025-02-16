import React from "react";
import { Link } from "react-router-dom";
import "./FashionBetter.css";
import { SlBasket } from "react-icons/sl";
function FashionBetter() {
  return (
    <div className="fashion-better">
      <div className="container">
        <div className="fashion-better__wrapper">
          <div className="fashion-better__right">
            <img
              src="./src/assets/images/fashion-better/fashion-better1.png"
              alt=""
              className="fashion-better__right-image"
            />
            <div className="fashion-better__right__info">
              <span className="fashion-better__right__info-title">
                ما تیپ و استایل شما رو
              </span>
              <span className="fashion-better__right__info-title">
                بهتر می کنیم .
              </span>
              <p className="fashion-better__right__info-text">
                در مسیر ارتقای مد روزمره، لینورا مجموعه‌ای از لباس‌های بروز را
                ارائه می‌دهد – مدی راحت و مقرون‌به‌صرفه برای تمام لحظات روز.
              </p>
              <Link className="fashion-better__right__info-link" to={"/"}>
                خرید کنید
                <SlBasket className="fashion-better__right__info-link-icon" />
              </Link>
            </div>
          </div>

          <div className="fashion-better__left">
            <img
              src="./src/assets/images/fashion-better/fashion-better2.png"
              alt=""
              className="fashion-better__left-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FashionBetter;
