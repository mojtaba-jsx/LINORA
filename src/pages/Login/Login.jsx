import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaRegEye } from "react-icons/fa";

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__right">
          <form className="login__form">
            <h1 className="login__form-title">
              وارد شوید
              <img
                src="../src/assets/images/LogoImage/LINORA2.png"
                alt=""
                className="login__form-title-logo"
              />
            </h1>
            <h2 className="login__form-subtitle">
              وارد حساب کاربری خود شوید .
            </h2>

            <div className="login__form-body">
              <label className="login__form-label">
                ایمیل
                <input type="text" className="login__form-email" />
              </label>
              <span className="login__form-email-error">ایمیل نامعتبراست</span>
              <label className="login__form-label">
                رمز عبور
                <input type="text" className="login__form-password" />
                <FaRegEye className="login__form-password-icon" />
              </label>
              <span className="login__form-email-error">
                رمز عبور نامعتبراست
              </span>
            </div>

            <label className="login__form-label-checkbox">
              <input type="checkbox" className="login__form-privacy" />
              <span className="custom-slider"></span>
              مرا به خاطر بسپار
            </label>

            <button className="login__form-btn">وارد شوید </button>
            <span className="login__form-login">
              اکانت ندارید ؟<Link to={"/auth/signup"}>ثبت نام </Link>
            </span>
          </form>
        </div>

        <div className="login__left">
          <img
            src="../src/assets/images/login/login.jpg"
            alt=""
            className="login__left-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
