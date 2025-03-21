import React from "react";
import "./TrendStyle.css";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
function TrendStyle() {
  return (
    <div className="trendstyle">
      <div className="container">
        <div className="trendstyle__wrapper">
          <div className="trendstyle__right">
            <h1 className="trendstyle__right-title">ترندهای این هفته</h1>
            <p className="trendstyle__right-text">
              از استایل های ترند هر هفته با خبر شوید
              <HiOutlineSpeakerphone className="trendstyle__right-icon" />
            </p>
            <div className="trendstyle__right__email">
              <label className="trendstyle__right__email-label">
                <input
                  type="text"
                  className="trendstyle__right__email-input"
                  placeholder="ایمیل خود را وارد کنید "
                />
                  <BiEnvelope className="trendstyle__right__email-input-btn-icon" />
              </label>
            </div>
          </div>

          <div className="trendstyle__left">
            <div className="trendstyle__left__row1">
              <img
                src="./src/assets/images/trend/trend1.png"
                alt=""
                className="trendstyle__left__row1-image"
              />
              <img
                src="./src/assets/images/trend/trend2.png"
                alt=""
                className="trendstyle__left__row1-image"
              />
            </div>

            <div className="trendstyle__left__row2">
              <img
                src="./src/assets/images/trend/trend3.png"
                alt=""
                className="trendstyle__left__row2-image"
              />
              <img
                src="./src/assets/images/trend/trend4.png"
                alt=""
                className="trendstyle__left__row2-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendStyle;
