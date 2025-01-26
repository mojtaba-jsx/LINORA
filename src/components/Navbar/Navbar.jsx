import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navabr">
      {/* !////////////////// */}
      <div className="navabr-right">
        <img
          src="./src/assets/images/linora-logo.png"
          alt=""
          className="navabr-right__logo"
        />
      </div>
      {/* !////////////////// */}

      <div className="navabr-middle">
        <ul className="navabr-menu">
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/"}>
              صفحه اصلی
            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/products"}>
              فروشگاه
            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/"}>
              دسته بندی
              <GoChevronDown className="navabr-menu__icon" />
            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/"}>
              مردانه
              <GoChevronDown className="navabr-menu__icon" />

            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/"}>
              زنانه
              <GoChevronDown className="navabr-menu__icon" />

            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/blog"}>
              بلاگ
            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/aboutus"}>
              درباره ما
            </Link>
          </li>
          <li className="navabr-menu__item">
            <Link className="navabr-menu__link" to={"/contactus"}>
              ارتباط با ما
            </Link>
          </li>
        </ul>
      </div>
      {/* !////////////////// */}
      <div className="navabr-left">
        <span className="navabr-left__search">
          <CiSearch className="navabr-left__search-icon" />
        </span>

        <span className="navabr-left__login">
        <FaRegUser />
        </span>
        <span className="navabr-left__basket">
          <CiShoppingBasket className="navabr-left__basket-icon" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
