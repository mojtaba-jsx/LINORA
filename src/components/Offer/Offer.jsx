import React from "react";
import "./Offer.css";
import MainTitle from "../MainTitle/MainTitle";
function Offer() {
  return (
    <div className="offer">
      <div className="container">
        <MainTitle title={'کد تخفیف'} />
        <div className="offer__wrapper">
          <img
            src="./src/assets/images/offer/offer.png"
            alt=""
            className="offer__image"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
