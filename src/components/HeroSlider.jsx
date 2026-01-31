import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import BannerHero1 from "../img/banner_Hero1.jpg";
import BannerHero2 from "../img/banner_Hero2.jpg";
import BannerHero3 from "../img/banner_Hero3.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Interducing The New</h4>
                <h3>
                  Microsoft Xbox <br />
                  360 Controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>

              <img src={BannerHero1} alt="slider_hero_1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Interducing The New</h4>
                <h3>
                  Microsoft Xbox <br />
                  360 Controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>

              <img src={BannerHero2} alt="slider_hero_3" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Interducing The New</h4>
                <h3>
                  Microsoft Xbox <br />
                  360 Controller
                </h3>
                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>

              <img src={BannerHero3} alt="slider_hero_3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
