import React from "react";
import "./ProductComment.css";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
function ProductComment() {
  return (
    <div className="product-comment">
      <div className="container">
        <div className="product-comment__wrapper">
          <div className="product-comment-add">
            <h1 className="product-comment__title">
              ثبت نظر
              <FaPencilAlt className="product-comment__title-icon" />
            </h1>
            <textarea placeholder="نظر خود را بنویسید ..." className="product-comment__textarea"></textarea>
            <button className="product-comment__btn">
              ثبت نظر
              <IoIosAdd className="product-comment__btn-icon" />
            </button>
          </div>
          {/* ! ///////// */}
          <div className="product-comment-list">
            <div className="product-comment-list__item">
              <div className="product-comment-list__item-info">
                <span className="product-comment-list__item-user">
                  علی کریمی
                  <img
                    src="../src/assets/images/ProductCommentUser/user-comment.jpg"
                    alt="user"
                    className="product-comment-list__item-user-image"
                  />
                </span>
                <span className="product-comment-list__item-role">
                    کاربر
                </span>
              </div>
              <p className="product-comment-list__item-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>

            <div className="product-comment-list__item">
              <div className="product-comment-list__item-info">
                <span className="product-comment-list__item-user">
                  علی کریمی
                  <img
                    src="../src/assets/images/ProductCommentUser/user-comment.jpg"
                    alt="user"
                    className="product-comment-list__item-user-image"
                  />
                </span>
                <span className="product-comment-list__item-role">
                    کاربر
                </span>
              </div>
              <p className="product-comment-list__item-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>

            <div className="product-comment-list__item">
              <div className="product-comment-list__item-info">
                <span className="product-comment-list__item-user">
                  علی کریمی
                  <img
                    src="../src/assets/images/ProductCommentUser/user-comment.jpg"
                    alt="user"
                    className="product-comment-list__item-user-image"
                  />
                </span>
                <span className="product-comment-list__item-role">
                    کاربر
                </span>
              </div>
              <p className="product-comment-list__item-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
            
            <div className="product-comment-list__item">
              <div className="product-comment-list__item-info">
                <span className="product-comment-list__item-user">
                  علی کریمی
                  <img
                    src="../src/assets/images/ProductCommentUser/user-comment.jpg"
                    alt="user"
                    className="product-comment-list__item-user-image"
                  />
                </span>
                <span className="product-comment-list__item-role">
                    کاربر
                </span>
              </div>
              <p className="product-comment-list__item-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComment;
