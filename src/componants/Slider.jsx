import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative ">
          <img
           src="public/image/slider/Online Pharmacy Services.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
             src="public/image/slider/Online Pharmacy Services (1).png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="public/image/slider/Online Pharmacy Services.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
