import React from "react";
import "./Home.css";
import Fashion from "../../components/Fashion/Fashion";
import Navbar from "../../components/Navbar/Navbar";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Features from '../../components/Features/Features'
import Search from '../../components/Search/Search'
import Basket from '../../components/Basket/Basket'
import TrendStyle from '../../components/TrendStyle/TrendStyle'
import SpecialProducts from '../../components/SpecialProducts/SpecialProducts'
import Offer from '../../components/Offer/Offer'
import SellingProducts from '../../components/SellingProducts/SellingProducts'
import Special from '../../components/Special/Special'
import Category from '../../components/Category/Category'
import TopBrands from '../../components/TopBrands/TopBrands'
import ReviewSlider from '../../components/ReviewSlider/ReviewSlider'
import FashionBetter from '../../components/FashionBetter/FashionBetter'
import InboxTips from '../../components/InboxTips/InboxTips'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Fashion />
      <Features/>
      <Search/>
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
      <Footer/>
    </>
  );
}

export default Home;
