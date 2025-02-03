import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
function Search() {
  return (
    <div className='search '>
        <div className="search-overlay"></div>
        <label className='search-label'>
            <input type="text" className='search-input' placeholder='جست و جو ...' />
            <CiSearch className='search-input__icon-search' />
            <IoClose  className='search-input__icon-clear' />
        </label>
    </div>
  )
}

export default Search