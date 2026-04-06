import React from "react";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <section className="max-w-11/12 mx-auto  my-3 ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={banner1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="banner2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner3" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
