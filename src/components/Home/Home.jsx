import React from "react";
import "./Home.css";
import Fashion from "../Fashion/Fashion";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import Features from '../Features/Features'
import Search from '../Search/Search'
function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Fashion />
      <Features/>
      <Search/>
    </>
  );
}

export default Home;
