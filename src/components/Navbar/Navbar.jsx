import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import appContext from "../../Contexts/AppContext";
function Navbar() {
  const { setIsShowSearchModal, setIsShowLoginModal, setIsShowBasketModal } =
    useContext(appContext);
  const navigate = useNavigate();
  return (
    <div className="navabr__wrapper">
      <div className="container">
        <div className="navbar">
          {/* !////////////////// */}
          <div className="navbar-right">
            <Link to={"/"}>
              <img
                src="../src/assets/images/LogoImage/LINORA2.png"
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
                <Link className="navbar-menu__link" to={"/store"}>
                  فروشگاه
                </Link>
              </li>
              <li className="navbar-menu__item category-btn">
                <Link className="navbar-menu__link" to={""}>
                  دسته بندی
                  <GoChevronDown className="navbar-menu__icon navbar-menu__icon-category" />
                </Link>
                <div className="navbar-menu__category">
                  <div className="navbar-menu__category__images">
                    <div className="navbar-menu__category__images__top">
                      <img
                        src="../src/assets/images/megamenu/megamenu1.png"
                        alt=""
                        className="navbar-menu__category__images__top-image"
                      />
                      <div className="navbar-menu__category__images__top-info">
                        <h1 className="navbar-menu__category__images__top-info-title">
                          محصولات جدید
                        </h1>
                        <span className="navbar-menu__category__images__top-info-subtitle">
                          بهترین کالکشن
                        </span>
                        <Link
                          className="navbar-menu__category__images__top-info-link"
                          to={"/"}
                        >
                          خرید کنید
                          <IoIosArrowForward className="navbar-menu__category__images__top-info-link-icon" />
                        </Link>
                      </div>
                    </div>

                    <div className="navbar-menu__category__images__bottom">
                      <div className="navbar-menu__category__images__bottom-left">
                        <img
                          src="../src/assets/images/megamenu/megamenu2.png"
                          alt=""
                          className="navbar-menu__category__images__bottom-left-image"
                        />
                        <div className="navbar-menu__category__images__bottom-left-info">
                          <h1 className="navbar-menu__category__images__bottom-left-info-title">
                            محصولات جدید
                          </h1>
                          <Link
                            className="navbar-menu__category__images__bottom-left-info-link"
                            to={"/"}
                          >
                            خرید کنید
                            <IoIosArrowForward className="navbar-menu__category__images__bottom-left-info-link-icon" />
                          </Link>
                        </div>
                      </div>

                      <div className="navbar-menu__category__images__bottom-right">
                        <img
                          src="../src/assets/images/megamenu/megamenu3.png"
                          alt=""
                          className="navbar-menu__category__images__bottom-right-image"
                        />
                        <div className="navbar-menu__category__images__bottom-right-info">
                          <h1 className="navbar-menu__category__images__bottom-right-info-title">
                            محصولات جدید
                          </h1>
                          <Link
                            className="navbar-menu__category__images__bottom-right-info-link"
                            to={"/"}
                          >
                            خرید کنید
                            <IoIosArrowForward className="navbar-menu__category__images__bottom-right-info-link-icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="navbar-menu__category__items">
                    <h1 className="navbar-menu__category__items-title">
                      محصولات
                    </h1>
                    <ul className="navbar-menu__category__items__list">
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                          لباس مردانه
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/men.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                          لباس زنانه
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/woman.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                          لباس بچگانه
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/children.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                          لباس ورزشی
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/sport.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                           عینک
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/eyeglasses.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>
                      <li className="navbar-menu__category__items__list__item">
                        <Link
                          to={"/"}
                          className="navbar-menu__category__items__list__item-link"
                        >
                          <span className="navbar-menu__category__items__list__item-link-text">
                           کفش
                          </span>
                          <img
                            src="../src/assets/images/categorySlider/shoes.png"
                            alt=""
                            className="navbar-menu__category__items__list__item-link-img"
                          />
                        </Link>
                      </li>


                    </ul>
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
            <span
              className="navbar-left__search"
              onClick={() => setIsShowSearchModal(true)}
            >
              <CiSearch className="navbar-left__icon" />
            </span>

            <span
              className="navbar-left__login"
              onClick={() => {
                navigate("/auth/signup");
              }}
            >
              <CiUser className="navbar-left__icon" />
            </span>
            <span className="navbar-left__basket">
              <CiShoppingBasket
                className="navbar-left__icon"
                onClick={() => setIsShowBasketModal(true)}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
