import React from "react";
import "./NotFound.css";
import { IoHome } from "react-icons/io5";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Basket from "../../components/Basket/Basket";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <Navbar />
        <Search />
        <Basket />
        <MobileMenu />
        <div className="not-found__wrapper">
          <img
            src="../src/assets/images/404/404.png"
            alt=""
            className="not-found__image"
          />
          <h1 className="not-found__title">به نظر می رسد گم شده اید</h1>
          <h2 className="not-found__text">صفحه مورد نظر پیدا نشد</h2>
          <button className="not-found__btn">
            رفتن به خانه
            <IoHome className="not-found__btn-icon" />
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default NotFound;
