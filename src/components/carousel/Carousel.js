import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import photo1 from "../../assets/main_page_banner (7).jpg";
import photo2 from "../../assets/main_page_banner (8).jpg";
import photo3 from "../../assets/main_page_banner (9).jpg";
import photo4 from '../../assets/main_page_banner (10).jpg'
import photo5 from '../../assets/main_page_banner (11).jpg'

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="carousel__inner"
      >
        
        <SwiperSlide>
          <img
            className="carousel__desktop"
            src={photo4}
          />
          <img
            className="carousel__mobile"
            src={photo5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
