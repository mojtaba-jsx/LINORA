import React from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function Login() {
  return (
    <div className="login">
      <div className="login-header">
        <img
          src="./src/assets/images/LogoImage/LINORA2.PNG"
          alt=""
          className="login-header__logo"
        />
        <h1 className="login-header__title">
          با ایمیل و رمز عبور خود وارد شوید
        </h1>
      </div>
      <form className="login-form">
        <label className="login-form__mail">
          <input type="text" className="login-form__mail-input" />
        </label>
        <label className="login-form__password">
          <input type="text" className="login-form__password-input" />
        </label>

        <div className="login-form__options">
          <span className="login-form__options-rememberme"></span>
          <span className="login-form__options-reset">
            رمز عبور را فراموش کرده اید ؟
          </span>
        </div>
        <button className="login-form__submit">ورود</button>
        <span className="login-form__seperator">یا</span>

        <div className="login-form__social-login">
          <button className="login-form__social-login__google">
            ورود با فیسبوک
            <FaFacebookF className="login-form__social__login__google-icon" />
          </button>

          <button className="login-form__social-login__facebook">
            ورود با گوگل
            <FaGoogle className="login-form__social-login__facebook-icon" />
          </button>
        </div>
        <span className="login-form__signup">
          حساب کاربری ندارید ؟
          <span className="login-form__signup-link">
            ثبت نام
          </span>
        </span>
      </form>
    </div>
  );
}

export default Login;
