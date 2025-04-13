import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Basket from "../../components/Basket/Basket";
import Search from "../../components/Search/Search";
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
import ProductReviews from '../../components/ProductReviews/ProductReviews'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductInfo.css";
import { FaStar } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbBasketPlus } from "react-icons/tb";
function ProductInfo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="product-info">
      <Navbar />
      <Basket />
      <Search />
      <div className="container">
        <div className="product-info__wrapper">
          <div className="product-info__slider">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              // navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="productinfo-slider-main"
            >
              <SwiperSlide>
                <img
                  className="productinfo-slider__img"
                  src="../src/assets/Images/special-products/1.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider__img"
                  src="../src/assets/Images/special-products/2.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider__img"
                  src="../src/assets/Images/special-products/3.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider__img"
                  src="../src/assets/Images/special-products/4.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider__img"
                  src="../src/assets/Images/special-products/5.png"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="productinfo-slider-gallery"
            >
              <SwiperSlide>
                <img
                  className="productinfo-slider-gallery-img"
                  src="../src/assets/Images/special-products/1.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider-gallery-img"
                  src="../src/assets/Images/special-products/2.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider-gallery-img"
                  src="../src/assets/Images/special-products/3.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider-gallery-img"
                  src="../src/assets/Images/special-products/4.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="productinfo-slider-gallery-img"
                  src="../src/assets/Images/special-products/5.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* ! ////////////////////////////////////////////////////////////// */}
          <div className="product-info__infos">
            <h1 className="product-info__infos-title">
              تی شرت لی مردانه برند نایکی
            </h1>
            {/* ! /////// */}
            <div className="product-info__infos-prices">
              <div className="product-info__infos-prices__box">
                <span className="product-info__infos-prices__box-org">
                  120000 تومان
                </span>
                <span className="product-info__infos-prices__box-final">
                  100000 تومان
                </span>
              </div>
              <div className="product-info__infos-prices__score">
                <span className="product-info__infos-prices__score-star">
                  4.5
                  <FaStar className="product-info__infos-prices__score-star-icon" />
                </span>
                <span className="product-info__infos-prices__score-sold">
                  120 فروخته شده
                </span>
              </div>
            </div>
            {/* ! /////// */}
            <div className="product-info__infos__decsription">
              <h1 className="product-info__infos__decsription-title">
                توضیحات :
              </h1>
              <p className="product-info__infos__decsription-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                <span className="product-info__infos__decsription-more-text">
                  مشاهده بیشتر ...
                </span>
              </p>
            </div>
            {/* ! /////// */}
            <div className="product-info__infos__colors">
              <h1 className="product-info__infos__colors-title">
                رنگ :
                <span className="product-info__infos__colors-title-color">
                  آبی
                </span>
              </h1>
              <div className="product-info__infos__colors-boxes">
                <div className="product-info__infos__colors-box red-box"></div>
                <div className="product-info__infos__colors-box gray-box"></div>
                <div className="product-info__infos__colors-box black-box"></div>
                <div className="product-info__infos__colors-box yellow-box"></div>
              </div>
            </div>
            {/* ! /////// */}
            <div className="product-info__infos__size">
              <div className="product-info__infos__size-title">
                <span className="product-info__infos__size-title-info">
                  سایز :
                  <span className="product-info__infos__size-title-info-number">
                    10
                  </span>
                </span>
                <span className="product-info__infos__size-title-chart">
                  مشاهده جدول سایز
                </span>
              </div>
              <div className="product-info__infos__size-boxes">
                <div className="product-info__infos__size-box">20</div>
                <div className="product-info__infos__size-box">30</div>
                <div className="product-info__infos__size-box">44</div>
                <div className="product-info__infos__size-box">48</div>
              </div>
            </div>
            {/* ! /////// */}
            <div className="product-info__infos__cart">
              <button className="product-info__infos__cart-add">
                افزودن به سبد خرید
                <TbBasketPlus className="product-info__infos__cart-add-icon" />
              </button>
              <button className="product-info__infos__cart-checkout">
                تسویه حساب
                <IoBagCheckOutline className="product-info__infos__cart-checkout-icon" />
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts/>
        <ProductReviews/>
      </div>
    </div>
  );
}

export default ProductInfo;
