import React from "react";
import "./CheckOut.css";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Basket from "../../components/Basket/Basket";
import Footer from "../../components/Footer/Footer";
function CheckOut() {
  return (
    <div className="checkout">
      <Navbar />
      <Search />
      <Basket />

      {/*  !///////////  */}
      <div className="container">
        <div className="checkout__header">
          <div className="checkout__header-overlay"></div>
          <img
            src="../../src/assets/images/checkout/checkout.jpg"
            alt=""
            className="checkout__header-image"
          />
          <h1 className="checkout__header-title">تسویه حساب</h1>
        </div>
        {/* ! ////////.//// */}
        <div className="checkout__wrapper">
          <div className="checkout-userinfo">
            <h2 className="checkout-userinfo__title">آدرس حمل و نقل</h2>
            <div className="checkout-userinfo__row1">
              <label className="checkout-label">
                نام کوچک *
                <input type="text" className="checkout-input" />
              </label>
              <label className="checkout-label">
                نام خانوادگی *
                <input type="text" className="checkout-input" />
              </label>
            </div>
            {/* ! ///////////// */}
            <div className="checkout-userinfo__row2">
              <label className="checkout-label">
                آدرس *
                <input type="text" className="checkout-input" />
              </label>
            </div>
            {/* ! ///////////// */}
            <div className="checkout-userinfo__row3">
              <label className="checkout-label">
                تلفن / موبایل *
                <input type="text" className="checkout-input" />
              </label>
              <label className="checkout-label">
                ایمیل *
                <input type="text" className="checkout-input" />
              </label>
            </div>
            {/* ! ///////////// */}
            <div className="checkout-userinfo__row4">
              <label className="checkout-label">
                شهر *
                <input type="text" className="checkout-input" />
              </label>
              <label className="checkout-label">
                کد پستی *
                <input type="text" className="checkout-input" />
              </label>
            </div>
            {/* ! ///////////// */}
            <div className="checkout-userinfo__row5">
              <label className="checkout-label">
                این اطلاعات رو برای دفعه بعد ذخیره کن
                <input type="checkbox" className="checkout-input" />
              </label>
            </div>
            {/* ! ///////////// */}
            <div className="checkout-userinfo__row6">
              <label className="checkout-label">
                یادداشت های سفارش (اختیاری)
                <textarea className="checkout-textarea"></textarea>
              </label>
            </div>
            <button className="checkout-btn">ثبت سفارش</button>
          </div>
          {/* !///// ////// */}
          <div className="checkout-userbasket">
            <h2 className="checkout-userbasket__title">سفارش شما</h2>
            <ul className="checkout-userbasket__list">
              <li className="checkout-userbasket__item">
                <span>محصول</span>
                <span>جمع جز</span>
              </li>
              <li className="checkout-userbasket__item">
                <span>
                  <img
                    src="../../src/assets/images/store/shoe.png"
                    alt="product"
                    className="checkout-userbasket__item-image"
                  />
                  پیراهن فلانل سایز معمولی - صورتی, متوسط
                </span>
                <span>120000 تومان</span>
              </li>
              <li className="checkout-userbasket__item">
                <span>
                  <img
                    src="../../src/assets/images/store/shoe.png"
                    alt="product"
                    className="checkout-userbasket__item-image"
                  />
                  پیراهن فلانل سایز معمولی - صورتی, متوسط
                </span>
                <span>120000 تومان</span>
              </li>
              <li className="checkout-userbasket__item">
                <span>
                  <img
                    src="../../src/assets/images/store/shoe.png"
                    alt="product"
                    className="checkout-userbasket__item-image"
                  />
                  پیراهن فلانل سایز معمولی - صورتی, متوسط
                </span>
                <span>120000 تومان</span>
              </li>
              <li className="checkout-userbasket__item">
                <span>
                  <img
                    src="../../src/assets/images/store/shoe.png"
                    alt="product"
                    className="checkout-userbasket__item-image"
                  />
                  پیراهن فلانل سایز معمولی - صورتی, متوسط
                </span>
                <span>120000 تومان</span>
              </li>
              <li className="checkout-userbasket__item">
                <span>جمع کل</span>
                <span>200000 تومان</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
