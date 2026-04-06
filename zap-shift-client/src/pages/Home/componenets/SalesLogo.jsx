import React from "react";
import brand1 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/amazon_vector.png";
import brand3 from "../../../assets/brands/casio.png";
import brand4 from "../../../assets/brands/moonstar.png";
import brand5 from "../../../assets/brands/randstad.png";
import brand6 from "../../../assets/brands/star.png";
import brand7 from "../../../assets/brands/start_people.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SalesLogo = () => {
  return (
    <section className="max-w-10/12 mx-auto  mt-24 mb-10 ">
      <h2 className="font-extrabold text-3xl text-center text-base-content mb-10">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={brand1} alt="brand1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt="brand2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt="brand3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt="brand4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt="brand5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="brand6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand7} alt="brand7" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SalesLogo;
