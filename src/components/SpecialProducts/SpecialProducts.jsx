import React, { useState } from "react";
import "./SpecialProducts.css";
function SpecialProducts() {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      title: "کیف نایک ",
      originalPrice: "400000",
      finalPrice: "320000",
      discountPercent: "20",
      image: "./src/assets/images/special-products/1.png",
    },
    {
      id: 2,
      title: " کلاه پشمی ادیداس ",
      originalPrice: "100000",
      finalPrice: "70000",
      discountPercent: "30",
      image: "./src/assets/images/special-products/2.png",
    },
    {
      id: 3,
      title: "کتونی نایک ",
      originalPrice: "1000000",
      finalPrice: "900000",
      discountPercent: "10",
      image: "./src/assets/images/special-products/3.png",
    },
    {
      id: 4,
      title: "عینک آفتابی ری بن ",
      originalPrice: "500000 تومان",
      finalPrice: "350000",
      discountPercent: "30",
      image: "./src/assets/images/special-products/4.png",
    },
    {
      id: 5,
      title: "ساعت کلاسیک ",
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

          </div>

          <div className="special-products__left">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProducts;
