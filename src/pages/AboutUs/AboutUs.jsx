import React from "react";
import "./AboutUs.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Basket from "../../components/Basket/Basket";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <Search />
      <Basket />
      <MobileMenu />
      <div className="container">
        <h1 className="about-us__title">درباره ما</h1>
        <div className="about-us__wrapper">
          <div className="about-us__image">
            <img
              src="../src/assets/images/about-us/about-us.png"
              alt=""
              className="about-us__image-img"
            />
          </div>
          <div className="about-us__info">
            <p className="about-us__info-text">
              <span>لینورا</span> یک فروشگاه تخصصی پوشاک مردانه و زنانه است که با هدف ترکیب
              زیبایی، کیفیت و قیمت مناسب راه‌اندازی شده است. ما باور داریم که
              لباس چیزی فراتر از پوشش است؛ بیانگر شخصیت، سبک زندگی و اعتماد
              به‌نفس شماست. در لینورا، جدیدترین ترندهای مد را با طراحی‌های ساده
              و کاربردی ارائه می‌دهیم تا همه بتوانند استایلی منحصر‌به‌فرد داشته
              باشند. تمام محصولات ما با دقت انتخاب می‌شوند تا راحتی، دوام و
              زیبایی را به همراه داشته باشند. ارسال سریع، بسته‌بندی حرفه‌ای و
              تضمین بازگشت کالا از خدماتی است که برای رضایت کامل مشتریان در نظر
              گرفته‌ایم. ما در کنار پوشاک وارداتی، به تولید داخلی نیز اهمیت
              می‌دهیم و از طراحان و تولیدکنندگان ایرانی حمایت می‌کنیم. پشتیبانی
              لینورا همیشه آماده پاسخ‌گویی به سوالات و مشاوره در خرید است. ما به
              دنبال ساخت تجربه‌ای دلنشین از خرید آنلاین برای مشتریان خود هستیم.
              در هر فصل، کالکشن‌های جدید و متنوعی ارائه می‌کنیم که مناسب هر
              سلیقه‌ای باشد. لینورا فقط یک فروشگاه نیست؛ ما همراه شما در مسیر
              ساختن استایلی خاص هستیم. چه به دنبال لباس روزمره باشید، چه رسمی،
              ما برای شما انتخاب‌های مناسبی داریم. اعتماد شما بزرگ‌ترین سرمایه
              ماست و برای حفظ آن همیشه تلاش می‌کنیم. به خانواده لینورا خوش
              آمدید؛ جایی که زیبایی، سادگی و کیفیت با هم معنا پیدا می‌کنند.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
