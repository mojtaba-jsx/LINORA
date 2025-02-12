import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Category.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import MainTitle from "../MainTitle/MainTitle";

function Category() {
  const [categoryItemDatas, setCategoryItemDatas] = useState([
    {
      id: 1,
      title: "عینک",
      image: "./src/assets/images/categorySlider/eyeglasses.png",
    },
    {
      id: 2,
      title: "کیف",
      image: "./src/assets/images/categorySlider/bag.png",
    },
    {
      id: 3,
      title: "لباس بچگانه",
      image: "./src/assets/images/categorySlider/children.png",
    },
    {
      id: 4,
      title: "لباس مردانه",
      image: "./src/assets/images/categorySlider/men.png",
    },
    {
      id: 5,
      title: "کفش و کتونی",
      image: "./src/assets/images/categorySlider/shoes.png",
    },
    {
      id: 6,
      title: "لباس ورزشی",
      image: "./src/assets/images/categorySlider/sport.png",
    },
    {
      id: 7,
      title: "ساعت",
      image: "./src/assets/images/categorySlider/watch.png",
    },
    {
      id: 8,
      title: "لباس زنانه",
      image: "./src/assets/images/categorySlider/woman.png",
    },
  ]);

  
  return (
    <div className="category">
      <MainTitle title={"خرید بر اساس دسته بندی"} />
      <div className="container">
        <div className="category__wrapper">
          <Swiper
            className="category-swiper"
            modules={[Navigation, Pagination,Autoplay]}
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
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {categoryItemDatas.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryItem {...category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Category;
