import React from "react";
import "./BlogPostInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { TfiTimer } from "react-icons/tfi";
function BlogPostInfo() {
  return (
    <div className="blog-post-info">
      <Navbar />
      <div className="container">
        <div className="blog-post-info__wrappper">
          <h1 className="blog-post-info__title">برترین مدل های سال 2024</h1>
          <span className="blog-post-info__readtime">
            <TfiTimer className="blog-post-info__readtime-icon" />
            10 دقیقه
          </span>
          <div className="blog-post-info__author">
            <div className="blog-post-info__author__info">
              <img
                src="../src/assets/images/blog/blog.jpg"
                alt=""
                className="blog-post-info__author__info-image"
              />
              <div className="blog-post-info__author__info-box">
                <span className="blog-post-info__author__info-box-name">
                  انا الکس
                </span>
                <span className="blog-post-info__author__info-box-role">
                  نویسنده
                </span>
              </div>
            </div>

            <div className="blog-post-info__author__date">20 خرداد 1402</div>
          </div>

          <img
            src="../src/assets/images/blog/blog.jpg"
            alt=""
            className="blog-post-info__image"
          />
          <p className="blog-post-info__body">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default BlogPostInfo;
