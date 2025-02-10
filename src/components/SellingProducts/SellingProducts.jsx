import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SellingProducts.css";
import MainTitle from "../MainTitle/MainTitle";
import SellingProductItem from "../SellingProductItem/SellingProductItem";
function SellingProducts() {
  const [sellingProductsInfos, setSellingProductsInfos] = useState([
    {
      id: 1,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 2,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 3,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 4,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 5,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 6,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 7,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id: 8,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
    {
      id:9,
      title: "ساعت استیل RedQ",
      caption: "ساعت های با کیفت و .",
      orginalPrice: "2000000 ",
      finalPrice: "1400000",
      image: "./src/assets/images/SellingProductsImages/watch.png",
    },
  ]);
  return (
    <div className="selling-products">
      <div className="container">
        <div className="selling-products__header">
          <div className="selling-products__header-title">
            <MainTitle title={"محصولات در حال فروش"} />
          </div>
          <Link className="selling-products__header-link" to={"/"}>
            مشاهده همه محصولات
          </Link>
        </div>

        <div className="selling-products__wrapper">
          {
            sellingProductsInfos.map(product=>(

              <SellingProductItem key={product.id} productInfo ={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SellingProducts;
