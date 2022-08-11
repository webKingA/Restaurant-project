import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ height: "30vh" }}
      >
        <SwiperSlide>
          <p style={{opacity : '.8rem'}}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat ad quisquam mollitia assumenda sequi tenetur, molestiae
            odio"
          </p>
          <div style={{display : "flex" , alignItems : "center" , marginTop : '2rem' , gap : '1rem' }}>
            <img src="./images/ava-1.jpg" alt="" style={{width : '20%' , borderRadius : '1rem'}} />
            <span style={{fontFamily : 'kalameh' , color : 'var(--color-blue-variant)'}}>Steven Crock</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p style={{opacity : '.8rem'}}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat ad quisquam mollitia assumenda sequi tenetur, molestiae
            odio"
          </p>
          <div style={{display : "flex" , alignItems : "center" , marginTop : '2rem' , gap : '1rem' }}>
            <img src="./images/ava-2.jpg" alt="" style={{width : '20%' , borderRadius : '1rem'}} />
            <span style={{fontFamily : 'kalameh' , color : 'var(--color-blue-variant)'}}>Steven Crock</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p style={{opacity : '.8rem'}}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat ad quisquam mollitia assumenda sequi tenetur, molestiae
            odio"
          </p>
          <div style={{display : "flex" , alignItems : "center" , marginTop : '2rem' , gap : '1rem' }}>
            <img src="./images/ava-3.jpg" alt="" style={{width : '20%' , borderRadius : '1rem'}} />
            <span style={{fontFamily : 'kalameh' , color : 'var(--color-blue-variant)'}}>Steven Crock</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
