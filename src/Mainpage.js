import React from "react";
import ImageSlider from "./component/ImageSlider/ImageSlider";
import Navbarcom from "./component/Navbar/Navbar";
import Search from "./component/Search/Search";
import Product from "./component/Products/Product";
import Footer from "./component/Footer/Footer";

function Mainpage() {
  return (
    <div className="App">
      <Navbarcom />
      <ImageSlider />
      <Search />
      <Product />
      <Footer />
    </div>
  );
}

export default Mainpage;
