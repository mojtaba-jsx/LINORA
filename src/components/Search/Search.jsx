import React, { useContext } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import appContext from "../../Contexts/AppContext";

function Search() {
  const { isShowSearchModal, setIsShowSearchModal } = useContext(appContext);
  return (
    <div className={`search  ${isShowSearchModal ? "active" : ""} `}>
      <div
        className="search-overlay"
        onClick={() => setIsShowSearchModal(false)}
      ></div>
      <label className="search-label">
        <input
          type="text"
          className="search-input"
          placeholder="جست و جو ..."
        />
        <CiSearch className="search-input__icon-search" />
        <IoClose
          className="search-input__icon-clear"
          onClick={() => setIsShowSearchModal(false)}
        />
      </label>
    </div>
  );
}

export default Search;
