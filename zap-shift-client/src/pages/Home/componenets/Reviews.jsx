import React, { use } from "react";
import ReviewIcon from "../../../assets/customer-top.png";
import quoteIcon from "../../../assets/reviewQuote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const reviewPromises = fetch("reviews.json").then((res) => res.json());
const Reviews = () => {
  const reviews = use(reviewPromises);
  return (
    <section>
      <div className="max-w-4xl mx-auto mt-24 flex flex-col items-center">
        <img src={ReviewIcon} alt="icon" />
        <h2 className="font-extrabold text-3xl text-center text-secondary my-2">
          Our Services
        </h2>
        <p className="font-medium text-base-200/60 text-center ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="review-container py-10 w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: " 50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper "
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="max-w-[400px]">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 slide-content">
                <img src={quoteIcon} alt="quoteIcon" />
                <p className="font-medium text-base-200/60 text-left mb-8">
                  {review.review}
                </p>

                <div className="divider divider-secondary/10 w-full before:border-t-2 before:border-dashed after:border-t-2 after:border-dashed before:bg-transparent after:bg-transparent"></div>

                <div className="flex items-center gap-3">
                  <img
                    src={review.user_photoURL}
                    className="w-12 h-12 rounded-full"
                    alt="userImage"
                  />
                  <div>
                    <h2 className="font-extrabold text-lg text-left text-secondary">
                      {review.userName}
                    </h2>
                    <p className="font-medium text-base-200/60 text-left">
                      {review.user_email}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation & Pagination Layout */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <div className="button-prev cursor-pointer text-secondary text-2xl">
              ❮
            </div>
            <div className="custom-pagination !static !w-auto"></div>
            <div className="button-next cursor-pointer text-secondary text-2xl">
              ❯
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
