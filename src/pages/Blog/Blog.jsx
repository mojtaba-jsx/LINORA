import React from "react";
import "./Blog.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Basket from "../../components/Basket/Basket";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Search from "../../components/Search/Search";
import BlogPost from '../../components/BlogPost/BlogPost'
function Blog() {
  return (
    <div className="blog">
      <Navbar />
      <Basket />
      <MobileMenu />
      <Search />
      <div className="container">
        <div className="blog__wrapper">
          <h1 className="blog__title">در مقالات جدید کاوش کنید</h1>
          <p className="blog__subtitle">
            ایده ها، روندها و الهام بخش برای آینده ای روشن تر
          </p>
          <div className="blog__posts">
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
          </div>
          <button className="blog__btn">نمایش بیشتر</button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Blog;
