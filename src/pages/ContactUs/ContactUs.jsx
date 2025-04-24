import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Basket from "../../components/Basket/Basket";
import Footer from "../../components/Footer/Footer";
function ContactUs() {
  return (
    <div className="contact-us">
      <Navbar />
      <Search />
      <Basket />
      <div className="container">
        <div className="contact-us__wrapper">
          <div className="contact-us__info">
            <h1 className="contact-us__info-title">ارتباط با ما</h1>
            <h2 className="contact-us__info-subtitle">
              نظرات و انتقادات خود را با ما در میان بگذارید
            </h2>
            <div className="contact-us__info-box">
              <span className="contact-us__info-item">
                <FaPhoneAlt className="contact-us__info-item-icon" />
                09218750654
              </span>
              <span className="contact-us__info-item">
                <FaRegEnvelope className="contact-us__info-item-icon" />
                mojtaba.jsx@gmail.com
              </span>
              <span className="contact-us__info-item">
                <CiLocationOn className="contact-us__info-item-icon" />
                استان اصفهان - شهر زیبا و خوش آب و هوای نطنز
              </span>
            </div>
          </div>

          <form className="contact-form">
            <div className="contact-form__row1">
              <label className="contact-form__label">
                نام
                <input type="text" className="contact-form__row1-input" />
              </label>
              <label className="contact-form__label">
                نام خانوادگی
                <input type="text" className="contact-form__row1-input" />
              </label>
            </div>

            <div className="contact-form__row2">
              <label className="contact-form__label">
                ایمیل
                <input type="email" className="contact-form__row1-input" />
              </label>
              <label className="contact-form__label">
                شماره تماس
                <input type="text" className="contact-form__row1-input" />
              </label>
            </div>

            <div className="contact-form__row3">
              <label className="contact-form__label">
                پیام
                <textarea className="contact-form__row3-text"></textarea>
              </label>
            </div>
            <button className="contact-form__btn">ارسال پیام</button>
            <img
              src="../src/assets/images/contact-us/contact-us-send.png"
              alt="send"
              className="contact-form__img"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
