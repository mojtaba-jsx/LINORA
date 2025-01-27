import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        {/* !////////////////// */}
        <div className="navbar-right">
          <img
            src="./src/assets/images/LogoImage/NEWLOGO.png"
            alt=""
            className="navbar-right__logo"
          />
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
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/man.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">مردانه</span>
                  </Link>
                </div>
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/woman.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">زنانه</span>
                  </Link>
                </div>
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/shoes.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">کفش</span>
                  </Link>
                </div>
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/jewelery.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">جواهرات</span>
                  </Link>
                </div>
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/sunglasses.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">عینک</span>
                  </Link>
                </div>
                <div className="navbar-menu__category-item">
                  <Link className="navbar-menu__category-item__link" to={"/"}>
                    <img
                      src="./src/assets/images/category/bags.png"
                      alt=""
                      className="navbar-menu__category-image"
                    />
                    <span className="navbar-menu__category-title">کیف</span>
                  </Link>
                </div>
              </div>
            </li>
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/"}>
                مردانه
                <GoChevronDown className="navbar-menu__icon" />
              </Link>
              <div className="navbar-menu__men">
                <div className="navbar-menu__men-items">
                  <h1 className="navbar-menu__men-items-title">مردانه</h1>
                  <div className="navbar-menu__men-items__box">
                    <ul className="navbar-menu__men-items-list">
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          کت و شلوار
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          پیراهن
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          تی شرت
                        </Link>
                      </li>
                    </ul>

                    <ul className="navbar-menu__men-items-list">
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          شلوار پارچه ای
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          هودی
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          ژاکت
                        </Link>
                      </li>
                    </ul>

                    <ul className="navbar-menu__men-items-list">
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          کروات
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          بلوز
                        </Link>
                      </li>
                      <li className="navbar-menu__men-items-list__item">
                        <Link
                          className="navbar-menu__men-items-list__item-link"
                          to={"/"}
                        >
                          شلوار لی
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-menu__men-image">
                  <img src="./src/assets/images/men-category.png" alt="" className="" />
                </div>
              </div>
            </li>
            <li className="navbar-menu__item">
              <Link className="navbar-menu__link" to={"/"}>
                زنانه
                <GoChevronDown className="navbar-menu__icon" />
              </Link>
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
            <FaRegUser className="navbar-left__icon" />
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
