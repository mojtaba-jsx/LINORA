import React, { useRef, useContext } from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import appContext from "../../Contexts/AppContext";
function Login() {
  // const overlayRef = useRef("");
  const { isShowLoginModal, setIsShowLoginModal, setIsShowSignUpModal } =
    useContext(appContext);

  return (
    <>
      <div
        className={`login-overlay ${isShowLoginModal ? "active" : ""}`}
        onClick={() => setIsShowLoginModal(false)}
      ></div>
      <div className={`login ${isShowLoginModal ? "active" : ""}`}>
        <div className="login-header">
          <IoCloseOutline
            className="login-header__close"
            onClick={() => setIsShowLoginModal(false)}
          />
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
            ایمیل
            <input type="text" className="login-form__mail-input" />
          </label>
          <label className="login-form__password">
            رمز عبور
            <input type="text" className="login-form__password-input" />
            <FaRegEye className="login-form__password-show" />
          </label>

          <div className="login-form__options">
            <label className="login-form__options-rememberme">
              <input
                type="checkbox"
                className="login-form__options-rememberme-input"
              />
              <span className="login-form__options-rememberme-slider"></span>

              <span className="">مرا به خاطر بسپار</span>
            </label>
            <span className="login-form__options-reset">
              بازیابی رمز عبور
            </span>
          </div>
          <button className="login-form__submit">ورود</button>
          <span className="login-form__seperator">یا</span>

          <div className="login-form__social-login">
            <button className="login-form__social-login__facebook">
              ورود با فیسبوک
              <FaFacebookF className="login-form__social__login__facebook-icon" />
            </button>

            <button className="login-form__social-login__google">
              ورود با گوگل
              <FaGoogle className="login-form__social-login__google-icon" />
            </button>
          </div>
          <span className="login-form__signup">
            حساب کاربری ندارید ؟
            <span className="login-form__signup-link" onClick={()=>{
              setIsShowSignUpModal(true)
              setIsShowLoginModal(false)
            }}>ثبت نام</span>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
