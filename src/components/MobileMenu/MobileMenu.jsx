import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { RiMenuFold3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
function MobileMenu() {
  return (

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
  );
}

export default MobileMenu;
