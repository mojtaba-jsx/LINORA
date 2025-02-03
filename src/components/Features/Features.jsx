import React from "react";
import "./Features.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="features__wrapper">
          <div className="features__box">
            <TbTruckDelivery className="features-box-icon" />
            <p className="features__box-text">
              تحویل  در سریع ترین زمان
            </p>
          </div>
          <div className="features__box">
            <FaHeadset className="features-box-icon" />
            <p className="features__box-text">پاسخ گویی 24 ساعته پشتیبان </p>
          </div>
          <div className="features__box">
            <MdOutlineSecurity className="features-box-icon" />
            <p className="features__box-text">پرداخت امن و سریع</p>
          </div>
          <div className="features__box">
            <FaUndoAlt className="features-box-icon" />
            <p className="features__box-text">
               مرجوعی و ضمانت بازگشت وجه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
