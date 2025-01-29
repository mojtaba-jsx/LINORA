import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import MobileMenu from '../MobileMenu/MobileMenu'
function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu/>
    </>
  );
}

export default Home;
