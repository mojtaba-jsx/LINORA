import React, { useContext } from "react";
import "./SignUp.css";
import { FaRegEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import appContext from "../../Contexts/AppContext";

function SignUp() {
  const { isShowSignUpModal, setIsShowSignUpModal } = useContext(appContext);
  return (
    <>
      <div
        className={`signup-overlay ${isShowSignUpModal ? "active" : ""}`}
        onClick={() => setIsShowSignUpModal(false)}
      ></div>
      <div className={`signup ${isShowSignUpModal ? "active" : ""} `}>
        <IoCloseOutline
          className="signup-close"
          onClick={() => setIsShowSignUpModal(false)}
        />

        {/* ! Header */}
        <div className="signup__header">
          <img
            src="./src/assets/images/LogoImage/LINORA2.png"
            alt=""
            className="signup__header-image"
          />
          <h1 className="signup__header-title">ثبت نام</h1>
        </div>
        {/* ! Form */}
        <form className="signup__form">
          <label className="signup__form-username">
            نام کاربری
            <input type="text" className="signup__form-username-input" />
          </label>
          <label className="signup__form-email">
            ایمیل
            <input type="text" className="signup__form-email-input" />
          </label>
          <label className="signup__password">
            رمز عبور
            <input type="text" className="signup__form-password-input" />
            <FaRegEye className="signup__form-password-input-show" />
          </label>
          <button className="signup__form-submit">ثبت نام</button>
          <span className="signup__form-seperator">یا</span>
          <div className="signup__form__social-signup">
            <button className="signup__form__social-signup-facebook">
              ورود با فبسبوک
              <FaFacebookF className="signup__form__social-signup-facebook-icon" />
            </button>

            <button className="signup__form__social-signup-google">
              ورود با گوگل
              <FaGoogle className="signup__form__social-signup-google-icon" />
            </button>
          </div>
          <span className="signup__form-login">
            قبلا حساب کاربری دارید ؟
            <span className="signup__form-login-link">ورود</span>
          </span>
        </form>
      </div>
    </>
  );
}

export default SignUp;
