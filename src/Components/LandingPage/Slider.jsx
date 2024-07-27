import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import FlexBox from "@common/UI/FlexBox";
import GridContainerCard from "./GridContainerCard";
import { Autoplay } from "swiper/modules";

const Slider = ({ data }) => (
  <FlexBox align="center" justify="center">
    <Swiper
      spaceBetween={70}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        transitionTimingFunction: "ease-out",
      }}
      modules={[Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5.25,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <GridContainerCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  </FlexBox>
);

export default Slider;
