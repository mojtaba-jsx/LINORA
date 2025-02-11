import React from "react";
import { Link } from "react-router-dom";
import "./Special.css";
function Special() {
  return (
    <div className="speacial">
      <div className="container">
        <div className="speacial-wrapper">
          <div className="speacial__box">
            <img
              src="./src/assets/images/special/women.png"
              alt=""
              className="speacial__box-image"
            />
            <div className="speacial__box__info">
              <span className="speacial__box__info-title">محصول</span>
              <span className="speacial__box__info-year">25</span>
              <Link to={"/"} className="speacial__box__info-link">
                #انحصاری زنانه
              </Link>
            </div>
          </div>

          <div className="speacial__box">
            <img
              src="./src/assets/images/special/men.png"
              alt=""
              className="speacial__box-image"
            />
            <div className="speacial__box__info">
              <span className="speacial__box__info-title">انحصاری</span>
              <span className="speacial__box__info-year">20</span>
              <Link to={"/"} className="speacial__box__info-link">
                #انحصاری مردانه
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
