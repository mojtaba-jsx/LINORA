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

    </>
  );
}

export default Home;
