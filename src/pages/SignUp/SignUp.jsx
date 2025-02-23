import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup">
      <div className="signup__wrapper">
        <div className="signup__right">
          <form className="signup__form">
            <h1 className="signup__form-title">
              ثبت نام
              <img
                src="../src/assets/images/LogoImage/LINORA2.png"
                alt=""
                className="signup__form-title-logo"
              />
            </h1>
            <h2 className="signup__form-subtitle">
              ثبت نام کنید و به محصولات دسترسی داشته باشید .
            </h2>

            <div className="signup__form-body">
              <label className="signup__form-label">
                نام کاربری
                <input type="text" className="signup__form-name" />
              </label>
              <span className="signup__form-name-error">
                نام کاربری نامعتبر است .
              </span>
              <label className="signup__form-label">
                ایمیل
                <input type="text" className="signup__form-email" />
              </label>
              <span className="signup__form-email-error">ایمیل نامعتبراست</span>
              <label className="signup__form-label">
                رمز عبور
                <input type="text" className="signup__form-password" />
              </label>
              <span className="signup__form-email-error">
                رمز عبور نامعتبراست
              </span>
            </div>

            <span className="signup__form-hint">
              از 8 یا بیشتر کاراکتر با ترکیبی از حروف، اعداد و نمادها استفاده
              کنید .
            </span>
            <label className="signup__form-label-privacy">
              <input type="checkbox" className="signup__form-privacy" />
              با شرایط و قوانین موافقید .
            </label>

            <button className="signup__form-btn">ثبت نام</button>
            <span className="signup__form-login">
              اکانت دارید ؟<Link to={"/"}>وارد شوید</Link>
            </span>
          </form>
        </div>

        <div className="signup__left">
          <img
            src="../src/assets/images/sign-up/signup.jpg"
            alt=""
            className="signup__left-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
