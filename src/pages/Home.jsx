import React from "react";
import Footer from "../componants/Footer";
import Slider from "../componants/Slider";
import Header from "../componants/Header";
// import Header2 from "../componants/Header2";
import Hero from "../componants/Hero";
import Testimonial from "../componants/Testimonial";
import Experience from "../componants/Experience";
import FeaturedItems from "../componants/FeaturedItems";
import ProductPage from "../componants/ProductPage";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Hero />
      <Experience />
      <Testimonial />
      <ProductPage />
      <FeaturedItems />
      <Footer />
    </div>
  );
};

export default Home;
