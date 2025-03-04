import React, { useContext } from "react";
import "./StoreCategoryModal.css";
import { IoClose } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import appContext from "../../Contexts/AppContext";
function StoreCategoryModal() {
  const { isShowStoreCategoryModal, setIsShowStoreCategoryModal } =
    useContext(appContext);

  return (
    <div
      className={`store-category-modal ${
        isShowStoreCategoryModal ? "active" : ""
      }`}
    >
      <div className="store-category-modal__overlay"></div>
      <div className="store-category-modal__wrapper">
        <div className="store-category-modal__header">
          <h1 className="store-category-modal__header-title">
            فیلتر محصولات
            <IoCloseOutline
              className="store-category-modal__header-icon"
              onClick={() => {
                setIsShowStoreCategoryModal(false);
              }}
            />
          </h1>
        </div>

        <div className="store-category-modal__filters">
          <div className="store-category-modal__filters__header">
            <h1 className="store-category-modal__filters__header-title">
              فیلتر ها
            </h1>
            <span className="store-category-modal__filters__header-clear">
              پاک کردن همه
            </span>
          </div>

          <div className="store-category-modal__filters__main">
            <span className="store-category-modal__filters__main-item">
              مردانه
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
            <span className="store-category-modal__filters__main-item">
              زنانه
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
            <span className="store-category-modal__filters__main-item">
              کودکانه
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
            <span className="store-category-modal__filters__main-item">
              ساعت
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
            <span className="store-category-modal__filters__main-item">
              کیف
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
            <span className="store-category-modal__filters__main-item">
              عینک
              <IoClose className="store-category-modal__filters__main-item-icon" />
            </span>
          </div>
        </div>

        <ul className="store-category-modal__category">
          <h2 className="store-category-modal__category-title">دسته بندی</h2>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              مردانه
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              زنانه
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              ساعت
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              کودکان
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              ورزشی
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              کفش
            </label>
          </li>
          <li className="store-category-modal__category-item">
            <label className="store-category-modal__category-label">
              <input
                type="checkbox"
                className="store-category-modal__category-item-input"
              />
              <span className="custom-checkbox"></span>
              عینک
            </label>
          </li>
        </ul>

        <ul className="store-category-modal__price">
          <h2 className="store-category-modal__price-title">قیمت </h2>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              کمتر از 100/000 تومان
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              100/000 تا 400/000
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              400/000 تا 800/000 تومان
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              800/000 تا 1/000/000 تومان
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              1/000/000 تا 1/400/000 تومان
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              1/400/000 تا 2/000/000 تومان
            </label>
          </li>
          <li className="store-category-modal__price-item">
            <label className="store-category-modal__price-label">
              <input
                type="checkbox"
                className="store-category-modal__price-item-input"
              />
              <span className="custom-checkbox"></span>
              بیشتر از 2/000/000 تومان
            </label>
          </li>
        </ul>

        <ul className="store-category-modal__colors">
          <h2 className="store-category-modal__colors-title">رنگ ها </h2>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-black"></span>
              مشکی
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-blue"></span>
              آبی
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-green"></span>
              سبز
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-brown"></span>
              قهوه ای
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-white"></span>
              سفید
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-red"></span>
              قرمز
            </label>
          </li>
          <li className="store-category-modal__colors-item">
            <label className="store-category-modal__colors-label">
              <input
                type="checkbox"
                className="store-category-modal__colors-item-input"
              />
              <span className="custom-checkbox"></span>
              <span className="store-category-modal__colors-item-yellow"></span>
              زرد
            </label>
          </li>
        </ul>
        <span className="store-category-modal__numbers">120 مورد</span>
      </div>
    </div>
  );
}

export default StoreCategoryModal;
