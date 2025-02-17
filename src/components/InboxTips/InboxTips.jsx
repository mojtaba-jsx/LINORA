import React from "react";
import "./InboxTips.css";
function InboxTips() {
  return (
    <div className="inbox-tips">
      <div className="container">
        <div className="inbox-tips__wrapper">
          <div className="inbox-tips__right">
            <h2 className="inbox-tips__right-title">
              نکات کارشناسان را در صندوق ورودی خود دریافت کنید
            </h2>
            <p className="inbox-tips__right-text">
              در خبرنامه ما مشترک شوید و همیشه به روز باشید.
            </p>
          </div>
          <div className="inbox-tips__left">
            <input
              type="text"
              className="inbox-tips__left-input"
              placeholder="ایمیل خود را وارد کنید "
            />
            <button className="inbox-tips__left-btn">اشتراک</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxTips;
