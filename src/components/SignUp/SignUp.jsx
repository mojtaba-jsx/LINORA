import React from "react";
import "./SignUp.css";
import { FaRegEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup-overlay"></div>
      <div className="signup__header">
        <img
          src="./src/assets/imgaes/LogoImage/LINORA2.png"
          alt=""
          className="signu__header-image"
        />
        <h1 className="signu__header-title">ثبت نام</h1>
        <form className="signup__form">
          نام کاربری
          <label className="signup__form-username">
            <input type="text" className="signup__form-username-input" />
          </label>
          <label className="signup__form-email">
            ایمیل
            <input type="text" className="signup__form-email-input" />
          </label>
          <label className="signup__password">
            رمز عبور
            <input type="text" className="signup__form-password-input" />
            <FaRegEye className="signup__form-password-input-icon" />
          </label>
          <button className="signup__form-submit">ثبت نام</button>
          <span className="signup__form-seperator">یا</span>
          <div className="signup__form__social-login">
            <button className="signup__form__social-login-facebook">
              ورود با فبسبوک
              <FaFacebookF />
            </button>

            <button className="signup__form__social-login-google">
              ورود با گوگل
              <FaGoogle />
            </button>
          </div>
          <span className="signup__form-login">
            قبلا حساب کاربری دارید ؟
            <span className="signup__form-login-link">ورود</span>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
