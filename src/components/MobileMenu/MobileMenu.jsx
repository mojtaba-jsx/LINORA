import React from "react";
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
  return (
    <>
      <div className="mobile-menu">
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <Link to={"/"} className="mobile-menu__list-link">
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
        <div className="mobile-menu__sidemenu">
          <ul className="mobile-menu__sidemenu-list">
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                <img
                  src="./src/assets/images/LogoImage/LINORA.PNG"
                  alt=""
                  className=""
                />
                <IoCloseOutline className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                فروشگاه
                <IoStorefrontOutline className="mobile-menu__sidemenu-list__icon" />
              </Link>
            </li>
            <li className="mobile-menu__sidemenu-list__item">
              <Link to={"/"} className="mobile-menu__sidemenu-list__link">
                دسته بندی
                <MdKeyboardArrowDown className="mobile-menu__sidemenu-list__icon" />
              </Link>
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
              <FaTelegram className="mobile-menu__sidemenu-socials__link" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaInstagram className="mobile-menu__sidemenu-socials__link" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaWhatsapp className="mobile-menu__sidemenu-socials__link" />
            </Link>
            <Link to={"/"} className="mobile-menu__sidemenu-socials__link">
              <FaGithub className="mobile-menu__sidemenu-socials__link" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
