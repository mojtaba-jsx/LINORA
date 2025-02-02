import React from "react";
import "./Fashion.css";
import { IoIosArrowBack } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
function Fashion() {
  return (
    <div className="fashion">
      <div className="container">
        <div className="fashion__wrapper">
          <div className="fashion__right">
            <h1 className="fashion__right-title"> جست و جو کنید </h1>
            <h1 className="fashion__right-title">
              استایل خود را کشف کنید
              <GiClothes className="fashion__right-title-icon" />
            </h1>
            <p className="fashion__right-text">
              مجموعه انتخاب شده ما از لباس ها و اکسسوری های شیک را که مطابق با{" "}
              <br />
              سلیقه منحصر به فرد شما طراحی شده اند،  .
            </p>
            <button className="fashion__right__btn">
              <span>
                کاوش کنید
                <IoSearchOutline  className="fashion__right__btn-icon" />
              </span>
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
