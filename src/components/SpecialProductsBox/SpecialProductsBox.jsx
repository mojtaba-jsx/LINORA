import React from "react";

function SpecialProductsBox() {
  return (
    <div className="special-products-box">
      <img
        src="./src/assets/images/special-products/1.png"
        alt="product"
        className="special-products-box__image"
      />
      <div className="special-products-box__infos">
        <div className="special-products-box__infos-right">
          <span className="special-products-box__infos-right-title">
            کیف نایک
          </span>
          <span className="special-products-box__infos-right-caption">
            کیف عالی با جنس با کیفت
          </span>
        </div>

        <div className="special-products-box__infos-left">
          <span className="special-products-box__infos-left-orginal-price">
            400000 تومان
          </span>
          <span className="special-products-box__infos-left-final-price">
            320000 تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default SpecialProductsBox;
