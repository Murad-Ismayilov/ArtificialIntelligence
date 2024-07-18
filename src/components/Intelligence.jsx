import React, { useRef, useState } from 'react';

import './Intelligence.css'


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';


const Intelligence = () => {
  return (
    <>
    <div className="intelligence py-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 py-5">
                    <h3> Next genaretion platform </h3>
                    <h1> Artificial intelligence & Syber security </h1>
                    <p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
                    <div className="button-groups">
                        <a href="#" className="button btn-primary"> Get Started </a>
                        <a href="#" className="button-group btn-primary"> <i class="fa-solid fa-play"></i> Watch Video </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 ">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715001849/Artificial_Intelligence_1_o6mokm.png" alt="" />
                </div>
            </div>

            <Swiper
            slidesPerView={3}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 40,
                },
                1024: {
                slidesPerView: 4,
                spaceBetween: 50,
                },
            }}
            modules={[Autoplay]}
            className="mySwiper"
            >
            <SwiperSlide>
            <img src="/logoipsumlar-1.svg" alt="" className='logoipsum'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/logoipsumlar-2.svg" alt="" className='logoipsum'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/logoipsumlar-3.svg" alt="" className='logoipsum'/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="/logoipsumlar-4.svg" alt="" className='logoipsum'/>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default Intelligence