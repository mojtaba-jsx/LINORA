import React, { useState, useRef } from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { RiMenuFold3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function MobileMenu() {
  const [isSidemenuActive, setIsSidemenuActive] = useState(false);
  const [isSidemenuCategoryActive, setIsSidemenuCategoryActive] =
    useState(false);

  const aroowDownRef = useRef(null);

  const showSideMenuCategoryHandler = () => {
    setIsSidemenuCategoryActive((prev) => !prev);
  };

  const closeSideMenuHandler = () => {
    setIsSidemenuActive(false);
  };
  const showSideMenuHandler = () => {
    setIsSidemenuActive(true);
  };

  return (
    <>
      <div className="mobile-menu">
        {/* ! Overlay */}
        <div
          className={` mobile-menu-overlay ${isSidemenuActive ? "active" : ""}`}
          onClick={closeSideMenuHandler}
        ></div>
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <Link
              to={"/"}
              className="mobile-menu__list-link"
              onClick={showSideMenuHandler}
            >
              <RiMenuFold3Line className="mobile-menu__list-icon" />
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link to={"/"} className="mobile-menu__list-link">
              <CiSearch className="mobile-menu__list-icon" />
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link to={"/"} className="mobile-menu__list-link">
              <IoHomeOutline className="mobile-menu__list-icon" />
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link to={"/"} className="mobile-menu__list-link">
              <CiShoppingBasket className="mobile-menu__list-icon" />
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link to={"/"} className="mobile-menu__list-link">
              <CiUser className="mobile-menu__list-icon" />
            </Link>
          </li>
        </ul>
        {/* * //////// Side Menu //////// */}
        <div
          className={` mobile-menu__sidemenu ${
            isSidemenuActive ? "active" : ""
          }`}
        >
          <ul className="mobile-menu__sidemenu-list">
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                <img
                  src="./src/assets/images/LogoImage/LINORA2.PNG"
                  alt=""
                  className="mobile-menu__sidemenu-list__logo"
                />
                <IoCloseOutline
                  className="mobile-menu__sidemenu-list__icon close-menu"
                  onClick={closeSideMenuHandler}
                />
              </Link>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                فروشگاه
                <IoStorefrontOutline className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
            <li
              className="mobile-menu__sidemenu-list__item sidemenu-category"
              onClick={showSideMenuCategoryHandler}
            >
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                دسته بندی
                <span
                className="sidemenu-arrowdown"
                  ref={aroowDownRef}
                  style={{
                    transform: `rotate${
                      isSidemenuCategoryActive ? "(180deg)" : "(0)"
                    }`,
                  }}
                >
                  <MdKeyboardArrowDown className="mobile-menu__sidemenu-list__icon " />
                </span>
              </Link>
              <ul
                className={`mobile-menu__sidemenu-category ${
                  isSidemenuCategoryActive ? "active" : ""
                } `}
              >
                <li className="mobile-menu__sidemenu-categor__item">
                  <Link className="mobile-menu__sidemenu-category__link">
                    مردانه
                  </Link>
                </li>
                <li className="mobile-menu__sidemenu-categor__item">
                  <Link className="mobile-menu__sidemenu-category__link">
                    زنانه
                  </Link>
                </li>
                <li className="mobile-menu__sidemenu-categor__item">
                  <Link className="mobile-menu__sidemenu-category__link">
                    اسپورت
                  </Link>
                </li>
                <li className="mobile-menu__sidemenu-categor__item">
                  <Link className="mobile-menu__sidemenu-category__link">
                    عینک
                  </Link>
                </li>
                <li className="mobile-menu__sidemenu-categor__item">
                  <Link className="mobile-menu__sidemenu-category__link">
                    کیف
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                بلاگ
                <FaRegNewspaper className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                درباره ما
                <AiOutlineInfoCircle className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                ارتباط با ما
                <FaPhoneAlt className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
          </ul>
          <div className="mobile-menu__sidemenu-socials">
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaTelegram className="mobile-menu__sidemenu-socials__icon telegram" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaInstagram className="mobile-menu__sidemenu-socials__icon instagram" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaWhatsapp className="mobile-menu__sidemenu-socials__icon whatsapp" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaGithub className="mobile-menu__sidemenu-socials__icon github" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
