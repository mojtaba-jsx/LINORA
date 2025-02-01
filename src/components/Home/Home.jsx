import React from "react";
import "./Home.css";
import Fashion from "../Fashion/Fashion";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Fashion />
    </>
  );
}

export default Home;
