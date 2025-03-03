import React ,{useContext} from "react";
import "./Store.css";
import { IoClose } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Basket from "../../components/Basket/Basket";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Search from "../../components/Search/Search";
import StoreProduct from "../../components/StoreProduct/StoreProduct";
import StoreCategoryModal from "../../components/StoreCategoryModal/StoreCategoryModal";
import appContext from "../../Contexts/AppContext";

function Store() {
  const { isShowStoreCategoryModal, setIsShowStoreCategoryModal } =
    useContext(appContext);

  return (
    <div className="store">
      <Navbar />
      <MobileMenu />
      <Basket />
      <MobileMenu />
      <Search />
      <div className="container">
        <div className="store__wrapper">
          <div className="store-products">
            <div className="store-products__header">
              <h1 className="store-products__header-title">لباس راحتی</h1>
              <button className="store-products__header-filter" onClick={()=>{
                setIsShowStoreCategoryModal(true)
              }}>
                فیلتر ها
                <LuSettings2 className="store-products__header-filter-icon" />
              </button>
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

            <div className="store-products__main">
              <div className="store-products__main__wrapper">
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
                <StoreProduct />
              </div>
              <button className="store-products__main-btn">
                بارگذاری بیشتر
              </button>
            </div>
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
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  زنانه
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  کودکانه
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  ساعت
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  کیف
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
                <span className="store-sidemenu__filters__main-item">
                  عینک
                  <IoClose className="store-sidemenu__filters__main-item-icon" />
                </span>
              </div>
            </div>

            <ul className="store-sidemenu__category">
              <h2 className="store-sidemenu__category-title">دسته بندی</h2>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  مردانه
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  زنانه
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  ساعت
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  کودکان
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  ورزشی
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  کفش
                </label>
              </li>
              <li className="store-sidemenu__category-item">
                <label className="store-sidemenu__category-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__category-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  عینک
                </label>
              </li>
            </ul>

            <ul className="store-sidemenu__price">
              <h2 className="store-sidemenu__price-title">قیمت </h2>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  کمتر از 100/000 تومان
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  100/000 تا 400/000
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  400/000 تا 800/000 تومان
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  800/000 تا 1/000/000 تومان
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  1/000/000 تا 1/400/000 تومان
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  1/400/000 تا 2/000/000 تومان
                </label>
              </li>
              <li className="store-sidemenu__price-item">
                <label className="store-sidemenu__price-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__price-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  بیشتر از 2/000/000 تومان
                </label>
              </li>
            </ul>

            <ul className="store-sidemenu__colors">
              <h2 className="store-sidemenu__colors-title">رنگ ها </h2>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-black"></span>
                  مشکی
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-blue"></span>
                  آبی
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-green"></span>
                  سبز
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-brown"></span>
                  قهوه ای
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-white"></span>
                  سفید
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-red"></span>
                  قرمز
                </label>
              </li>
              <li className="store-sidemenu__colors-item">
                <label className="store-sidemenu__colors-label">
                  <input
                    type="checkbox"
                    className="store-sidemenu__colors-item-input"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="store-sidemenu__colors-item-yellow"></span>
                  زرد
                </label>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <StoreCategoryModal />
      <Footer />
    </div>
  );
}

export default Store;
