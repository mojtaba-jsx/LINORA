import React, { useState } from "react";
import "./TopBrands.css";
import MainTitle from "../MainTitle/MainTitle";
function TopBrands() {
  const [topBrandsInfo, setTopBrandsInfo] = useState([
    { id: 1, image: "./src/assets/images/top-brands/h-m.png" },
    { id: 2, image: "./src/assets/images/top-brands/levis.png" },
    { id: 3, image: "./src/assets/images/top-brands/nike.png" },
    { id: 4, image: "./src/assets/images/top-brands/polo.png" },
    { id: 5, image: "./src/assets/images/top-brands/puma.png" },
  ]);
  return (
    <div className="top-brands">
      <div className="container">
        <MainTitle title={"بهترین برند ها "} />
        <div className="top-brands__wrapper">
          {topBrandsInfo.map((brand) => (
            <div className="top-brands__box" key={brand.id}>
              <img
                src={brand.image}
                alt=""
                className="top-brands__box-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBrands;
