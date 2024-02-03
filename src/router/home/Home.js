import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";


function Home({ data }) {
  return (
    <div className="container">
      <Carousel />
      <Products data={data} />
    </div>

  );
}

export default Home;
