import React from "react";
import "./Fashion.css";
import { IoIosArrowBack } from "react-icons/io";
function Fashion() {
  return (
    <div className="fashion">
      <div className="container">
        <div className="fashion__wrapper">
          <div className="fashion__right">
            <h1 className="fashion__right-title"> جست و جو کنید و</h1>
            <h1 className="fashion__right-title">استایل خود را کشف کنید</h1>
            <p className="fashion__right-text">
              مجموعه انتخاب شده ما از لباس ها و اکسسوری های شیک را که مطابق با <br />
              سلیقه منحصر به فرد شما طراحی شده اند، کاوش کنید.
            </p>
            <button className="fashion__right__btn">
              کاوش کنید
              <IoIosArrowBack className="fashion__right__btn-icon" />
            </button>
          </div>

          <div className="fashion__left">
            <img
              src="./src/assets/images/fashion/fashion.png"
              alt=""
              className="fashion__left-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;
