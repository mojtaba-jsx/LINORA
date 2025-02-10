import React from "react";
import { Link } from "react-router-dom";
import "./SellingProducts.css";
import MainTitle from '../MainTitle/MainTitle'
function SellingProducts() {
  return (
    <div className="selling-products">
      <div className="container">
        <div className="selling-products__header">
            <MainTitle title={'محصولات در حال فروش'}/>
           <Link className="selling-products__header-link" to={'/'}>
                مشاهده همه محصولات
            </Link>
        </div>

        <div className="selling-products__wrapper">
                <div className=""></div>

        </div>
      </div>
    </div>
  );
}

export default SellingProducts;
