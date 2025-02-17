import React from "react";
import "./Home.css";
import Fashion from "../Fashion/Fashion";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import Features from '../Features/Features'
import Search from '../Search/Search'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Basket from '../Basket/Basket'
import TrendStyle from '../TrendStyle/TrendStyle'
import SpecialProducts from '../SpecialProducts/SpecialProducts'
import Offer from '../Offer/Offer'
import SellingProducts from '../SellingProducts/SellingProducts'
import Special from '../Special/Special'
import Category from '../Category/Category'
import TopBrands from '../TopBrands/TopBrands'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import FashionBetter from '../FashionBetter/FashionBetter'
import InboxTips from '../InboxTips/InboxTips'
function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Fashion />
      <Features/>
      <Search/>
      <Login/>
      <SignUp/>
      <Basket/>
      <TrendStyle/>
      <SpecialProducts/>
      <Offer/>
      <SellingProducts/>
      <Special/>
      <Category/>
      <TopBrands/>
      <ReviewSlider/>
      <FashionBetter/>
      <InboxTips/>
    </>
  );
}

export default Home;
