import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { CiUser } from "react-icons/ci";
function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        {/* !////////////////// */}
        <div className="navbar-right">
          <Link to={"/"}>
            <img
              src="./src/assets/images/LogoImage/NEWLOGO.png"
              alt=""
              className="navbar-right__logo"
            />
          </Link>
        </div>
        {/* !////////////////// */}

        <div className="navbar-middle">
          <ul className="navbar-menu">
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/"}>
                صفحه اصلی
              </Link>
            </li>
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/products"}>
                فروشگاه
              </Link>
            </li>
            <li className="navbar-menu__item category-btn">
              <Link className="navbar-menu__link" to={"/"}>
                دسته بندی
                <GoChevronDown className="navbar-menu__icon navbar-menu__icon-category" />
              </Link>
              <div className="navbar-menu__category">
                <div className="navbar-menu__category__top">
                  <img
                    src="./src/assets/images/category/men.png"
                    alt=""
                    className="navbar-menu__category__top-men"
                  />
                  <img
                    src="./src/assets/images/category/sport.png"
                    alt=""
                    className="navbar-menu__category__top-sport"
                  />
                  <img
                    src="./src/assets/images/category/woman1.png"
                    alt=""
                    className="navbar-menu__category__top-woman"
                  />
                </div>
                <div className="navbar-menu__category__bottom">
                  <img
                    src="./src/assets/images/category/backpack.png"
                    alt=""
                    className="navbar-menu__category__bottom-backpack"
                  />
                  <img
                    src="./src/assets/images/category/coupons.png"
                    alt=""
                    className="navbar-menu__category__bottom-coupon"
                  />
                  <img
                    src="./src/assets/images/category/sunglasses.png"
                    alt=""
                    className="navbar-menu__category__bottom-sunglsses"
                  />
                </div>
              </div>
            </li>

            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/blog"}>
                بلاگ
              </Link>
            </li>
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/aboutus"}>
                درباره ما
              </Link>
            </li>
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/contactus"}>
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
        {/* !////////////////// */}
        <div className="navbar-left">
          <span className="navbar-left__search">
            <CiSearch className="navbar-left__icon" />
          </span>

          <span className="navbar-left__login">
            <CiUser className="navbar-left__icon" />
          </span>
          <span className="navbar-left__basket">
            <CiShoppingBasket className="navbar-left__icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
