import React from 'react'
import './Category.css'
import CategoryItem from '../CategoryItem/CategoryItem'
import MainTitle from '../MainTitle/MainTitle'
function Category() {
  return (
    <div className='category'>
      <MainTitle title={'خرید بر اساس دسته بندی'}/>
        <div className="container">
            <div className="category__wrapper">
                    <CategoryItem/>
            </div>
        </div>
    </div>
  )
}

export default Category