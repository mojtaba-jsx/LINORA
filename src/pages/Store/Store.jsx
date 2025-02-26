import React from "react";
import "./Store.css";
import { IoClose } from "react-icons/io5";
import Navbar from "../../components/Navbar/Navbar";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
function Store() {
  return (
    <div className="store">
      <Navbar />
      <MobileMenu/>
      <div className="container">
        <div className="store__wrapper">
          <div className="store-products">
            <div className="store-products__header">
              <h1 className="store-products__header-title">لباس راحتی</h1>
              <div className="store-products__header__boxes">
                <span className="store-products__header__boxes-number">
                  100 مورد
                </span>
                <select className="store-products__header__boxes-select">
                  <option value="default">مرتب سازی بر اساس</option>
                  <option value="newsest">جدیدترین</option>
                  <option value="popularity">محبوبیت</option>
                  <option value="low-to-hight">قیمت کم به زیاد</option>
                  <option value="high-to-low">قیمت زیاد به کم</option>
                </select>
              </div>
            </div>

            <div className="store-products__main">{/* ! Store Products */}</div>
          </div>

          <aside className="store-sidemenu">
            <span className="store-sidemenu__route">خانه / محصولات</span>
            <div className="store-sidemenu__filters">
              <div className="store-sidemenu__filters__header">
                <h1 className="store-sidemenu__filters__header-title">
                  فیلتر ها
                </h1>
                <span className="store-sidemenu__filters__header-clear">
                  پاک کردن همه
                </span>
              </div>
              <div className="store-sidemenu__filters__main">
                <span className="store-sidemenu__filters__main-item">
                  مردانه
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  زنانه
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  کودکانه
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  ساعت
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  کیف
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  عینک
                  <IoClose  className="store-sidemenu__filters__main-item-icon" />
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Store;
