import React from "react";
import c from "./SwiperContainer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import Mentor from "../mentor/Mentor";
import Task from "../task/Task";

const SwiperContainer = ({title, flag}) => {
  return (
    <div className={c.innerContainer}>
      <div className={c.topContainer}>
        <h2>{title}</h2>
        <div className={c.btnContainer}>
          <div className="btn-prev">
            <GrLinkPrevious className="icon-btn-prev" />
          </div>
          <div className="btn-next">
            <GrLinkNext className="icon-btn-next" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
          disabledClass: "proj-btn-disabled",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          {
            flag === 'mentor' ? <Mentor /> : <Task/>
          }
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
