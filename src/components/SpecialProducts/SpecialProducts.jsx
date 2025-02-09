import React, { useState } from "react";
import "./SpecialProducts.css";

function SpecialProducts() {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      title: "کیف نایک ",
      caption: "جنس عالی و با کیفیت",
      originalPrice: "400000",
      finalPrice: "320000",
      discountPercent: "20",
      image: "./src/assets/images/special-products/1.png",
    },
    {
      id: 2,
      title: " کلاه پشمی ادیداس ",
      caption: "جنس عالی و با کیفیت",
      originalPrice: "100000",
      finalPrice: "70000",
      discountPercent: "30",
      image: "./src/assets/images/special-products/2.png",
    },
    {
      id: 3,
      title: "کتونی نایک ",
      caption: "جنس عالی و با کیفیت",
      originalPrice: "1000000",
      finalPrice: "900000",
      discountPercent: "10",
      image: "./src/assets/images/special-products/3.png",
    },
    {
      id: 4,
      title: "عینک آفتابی ری بن ",
      caption: "جنس عالی و با کیفیت",
      originalPrice: "500000 ",
      finalPrice: "350000",
      discountPercent: "30",
      image: "./src/assets/images/special-products/4.png",
    },
    {
      id: 5,
      title: "ساعت کلاسیک ",
      caption: "جنس عالی و با کیفیت",
      originalPrice: "2000000",
      finalPrice: "2000000",
      discountPercent: "0",
      image: "./src/assets/images/special-products/5.png",
    },
  ]);
  return (
    <div className="special-products">
      <div className="conatiner">
        <div className="special-products__wrapper">
          <div className="special-products__right">
            <div className="special-products__box right-box">
              <img
                src="./src/assets/images/special-products/1.png"
                alt=""
                className="special-products__box-image"
              />
              <div className="special-products__box__infos">
                <div className="special-products__box__infos-right">
                  <span className="special-products__box__infos-right-title">
                    کفش نایک
                  </span>
                  <span className="special-products__box__infos-right-caption">
                    کیفیت عالی و با دوام
                  </span>
                </div>

                <div className="special-products__box__infos-left">
                  <span className="special-products__box__infos-left-orgPrice">
                    120000 تومان
                  </span>
                  <span className="special-products__box__infos-left-finalPrice">
                    100000 تومان
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="special-products__left">
            {productsData.slice(1, 5).map((product) => (
              <div className="special-products__box" key={product.id}>
                <img
                  src={product.image}
                  alt=""
                  className="special-products__box-image"
                />
                <div className="special-products__box__infos">
                  <div className="special-products__box__infos-right">
                    <span className="special-products__box__infos-right-title">
                      {product.title}
                    </span>
                    <span className="special-products__box__infos-right-caption">
                      {product.caption}
                    </span>
                  </div>

                  <div className="special-products__box__infos-left">
                    <span className="special-products__box__infos-left-orgPrice">
                      {product.originalPrice} تومان
                    </span>
                    <span className="special-products__box__infos-left-finalPrice">
                      {product.finalPrice} تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProducts;
