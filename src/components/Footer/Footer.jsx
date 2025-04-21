import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        {/* ! Main Footer */}
        <div className="footer__wrapper">
          <ul className="footer__col1">
            <li className="footer__col1-item">
              <img
                src="../../src/assets/images/LogoImage/LINORA2.png"
                alt=""
                className="footer__col1-logo"
              />
            </li>
            <li className="footer__col1-item">
              <p className="footer__col1-text">
                <span className="footer__col1-text-highlight">لینورا</span>{" "}
                فروشگاهی تخصصی برای لباس‌های مردانه و زنانه ،  جایی که کیفیت، استایل
                و راحتی را در کنار هم تجربه می کنید .
              </p>
            </li>
            <li className="footer__col1-item">
              <span className="footer__col1-copyright">
                2025 تمامی حقوق محفوظ است
              </span>
            </li>
          </ul>

          <ul className="footer__col2">
            <li className="footer__col2-item">
              ما را دنبال کنید :
              <div className="footer__col2-logos">
                <FaTelegram className="footer__col2-logos-telegram" />
                <FaInstagram className="footer__col2-logos-instagram" />
                <FaWhatsapp className="footer__col2-logos-whatsapp" />
                <FaGithub className="footer__col2-logos-github" />
              </div>
            </li>
            <li className="footer__col2-item">
              <span className="footer__col2-call">
                {/* <IoIosCall className="footer__col2-call-icon" /> */}
                تماس با ما
              </span>
              <span className="footer__col2-number">+989218750654</span>
              <span className="footer__col2-location">
                <FaLocationDot className="footer__col2-location-icon" />
                استان اصفهان شهر زیبا و خوش آب و هوای نطنز
              </span>
            </li>
          </ul>

          <ul className="footer__col3">
            <li className="footer__col3-item">صفحات</li>

            <li className="footer__col3-item">
              <Link to={"/"} className="footer__col3-link">
                صفحه اصلی
              </Link>
            </li>

            <li className="footer__col3-item">
              <Link to={"/"} className="footer__col3-link">
                بلاگ
              </Link>
            </li>
            <li className="footer__col3-item">
              <Link to={"/"} className="footer__col3-link">
                درباره ما
              </Link>
            </li>
            <li className="footer__col3-item">
              <Link to={"/"} className="footer__col3-link">
                ارتباط با ما
              </Link>
            </li>
          </ul>

          <ul className="footer__col4">
            <li className="footer__col4-item">فروشگاه</li>
            <li className="footer__col4-item">
              <Link className="footer__col4-link" to={"/"}>
                لباس مردانه
              </Link>
            </li>
            <li className="footer__col4-item">
              <Link className="footer__col4-link" to={"/"}>
                لباس زنانه
              </Link>
            </li>
            <li className="footer__col4-item">
              <Link className="footer__col4-link" to={"/"}>
                عینک
              </Link>
            </li>
            <li className="footer__col4-item">
              <Link className="footer__col4-link" to={"/"}>
                کلاه
              </Link>
            </li>
          </ul>

          <ul className="footer__col5">
            <li className="footer__col5-item">
              <img
                src="../../src/assets/images/footer-logos/mastercard.png"
                alt=""
                className="footer__col5-image"
              />
              <img
                src="../../src/assets/images/footer-logos/paypal.png"
                alt=""
                className="footer__col5-image"
              />
              <img
                src="../../src/assets/images/footer-logos/visa.png"
                alt=""
                className="footer__col5-image"
              />
              <img
                src="../../src/assets/images/footer-logos/zarrinpal.png"
                alt=""
                className="footer__col5-image"
              />
              <img
                src="../../src/assets/images/footer-logos/enamd.png"
                alt=""
                className="footer__col5-image"
              />
            </li>
          </ul>
        </div>
        {/* ! SubFooter */}
        <div className="sub-footer">
          <span className="sub-footer__info">
            توسعه داده شده با
            <FaHeart className="sub-footer__info-icon" />
            توسط
            <Link className="sub-footer__info-link" to={"/"}>
              Mojtaba.JSX
              <FaGithub className="sub-footer__text-logo" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
