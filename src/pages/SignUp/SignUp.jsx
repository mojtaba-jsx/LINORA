import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup">
      <div className="signup__wrapper">
        <div className="signup__right">
          <form className="signup__form">
            <h1 className="signup__form-title">ثبت نام</h1>
            <h2 className="signup__form-subtitle">
              ثبت نام کنید و به محصولات دسترسی داشته باشید
            </h2>

            <div className="signup__form-body">
              <label className="signup__form-label">
                نام کاربری
                <input type="text" className="signup__form-name" />
              </label>
              <span className="signup__form-name-error">
                نام کاربری نامعتبراست
              </span>
              <label className="signup__form-label">
                ایمیل
                <input type="text" className="signup__form-email" />
              </label>
              <span className="signup__form-email-error">
                نام کاربری نامعتبراست
              </span>
              <label className="signup__form-label">
                رمز عبور
                <input type="text" className="signup__form-password" />
              </label>
              <label className="signup__form-label">
                تایید رمز عبور
                <input type="text" className="signup__form-password" />
              </label>
              <span className="signup__form-email-error">
                نام کاربری نامعتبراست
              </span>
            </div>

            <span className="signup__form-hint">
              از 8 یا بیشتر کاراکتر با ترکیبی از حروف، اعداد و نمادها استفاده
              کنید
            </span>
            <label className="signup__form-label-privacy">
              <input type="checkbox" className="signup__form-privacy" />
            </label>

            <button className="signup__form-btn">ثبت نام</button>
            <span className="signup__form-login">
              اکانت دارید ؟<Link to={"/"}>وارد شوید</Link>
            </span>
          </form>
        </div>

        <div className="signup__left">
          <img
            src="../src/assets/images/sign-up/signup.png"
            alt=""
            className="signup__lef-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
