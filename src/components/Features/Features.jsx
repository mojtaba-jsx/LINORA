import React from "react";
import "./Features.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
function Features() {
  return (
    <div className="features">
      <div className="features__box">
        <TbTruckDelivery className="features-box-icon" />
        <p className="features__box-text">تحویل به موقع و در سریع ترین زمان</p>
      </div>
      <div className="features__box">
        <FaHeadset className="features-box-icon" />
        <p className="features__box-text">پاسخ گویی 24 ساعته پشتیبان ها</p>
      </div>
      <div className="features__box">
        <MdOutlineSecurity className="features-box-icon" />
        <p className="features__box-text">پرداخت امن و سریع</p>
      </div>
      <div className="features__box">
        <FaUndoAlt className="features-box-icon" />
        <p className="features__box-text">کالای مرجوعی و ضمانت بازگشت وجه</p>
      </div>
    </div>
  );
}

export default Features;
