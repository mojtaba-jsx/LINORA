import React from "react";
import "./BlogPost.css";
import { IoIosArrowBack } from "react-icons/io";
function BlogPost() {
  return (
    <div className="blog-post">
      <img
        src="./src/assets/images/blog/blog.jpg"
        alt=""
        className="blog-post__image"
      />
      <div className="blog-post__author">
        <span className="blog-post__author-infos">
          <img
            src="./src/assets/images/blog/blog-author.png"
            alt=""
            className="blog-post__author-info-image"
          />
          انا الکس
        </span>
        <span className="blog-post__author-infos-date">20 خرداد 1403</span>
      </div>
      <h1 className="blog-post__title">برترین مدل های سال 2024</h1>
      <p className="blog-post__text">
        امروزه مدل های زیادی در سراسر جهان مشغول به مدلینگ می باشند ...
      </p>
      <button className="blog-post__btn">
        مطالعه بیشتر
        <IoIosArrowBack className="blog-post__btn-icon" />
      </button>
    </div>
  );
}

export default BlogPost;
