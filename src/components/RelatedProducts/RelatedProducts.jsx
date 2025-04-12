import React from "react";
import "./RelatedProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import RelatedProductsCard from "../RelatedProductsCard/RelatedProductsCard";
import "swiper/css";
function RelatedProducts() {
  return (
    <div className="related-products">
      <div class="container">
        <div class="related-products__wrapper">
          <h1 class="related-products__title">محصولات مشابه</h1>
          <Swiper
            // spaceBetween={20}
            // slidesPerView={4}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <RelatedProductsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RelatedProductsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RelatedProductsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RelatedProductsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RelatedProductsCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
