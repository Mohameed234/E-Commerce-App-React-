import React from "react";
import Product from "./product";
import "./slideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SlideProduct({ data, title}) {
  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
           autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

            {
                data.map((item) => {

                    return(

                    <SwiperSlide>
                      <Product item={item} />
                    </SwiperSlide>
                    )
                   
                })
            }

        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
