import React, { useState } from "react";
import "./ReviewSlider.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainTitle from '../MainTitle/MainTitle'
function ReviewSlider() {
  const [usersCommentsInfo, setUsersCommentsInfo] = useState([
    {
      id: 1,
      username: "علی کریمی",
      userImage: "./src/assets/images/review-slider/user.png",
      body: "محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون",
      star:4
    },
    {
      id: 2,
      username: "علی کریمی",
      userImage: "./src/assets/images/review-slider/user.png",
      body: "محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون",
      star:4
    },
    {
      id: 3,
      username: "علی کریمی",
      userImage: "./src/assets/images/review-slider/user.png",
      body: "محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون",
      star:4
    },
    {
      id: 4,
      username: "علی کریمی",
      userImage: "./src/assets/images/review-slider/user.png",
      body: "محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون",
      star:4
    },
    {
      id: 5,
      username: "علی کریمی",
      userImage: "./src/assets/images/review-slider/user.png",
      body: "محصولات خوب و با کیفیتی دارید و تحویل به موقع و سریع هست ممنون",
      star:4
    },
  ]);
  return (
    <div className="review-slider">
      <div className="container">
        <MainTitle title={'نظرات'}/>
        <div className="review-slider__wrapper">
          <Swiper
            className="review-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 120,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 140,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 180,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 180,
              },
            }}
          >
            {usersCommentsInfo.map((comment) => (
              <SwiperSlide key={comment.id}>
                <ReviewCard {...comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
