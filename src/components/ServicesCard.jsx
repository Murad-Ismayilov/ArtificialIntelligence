import React from 'react'

import './ServicesCard.css'
import { Autoplay } from 'swiper/modules';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

const ServicesCard = () => {
  return (
    <>
    <div id="content">

<div class="about-content">
    


    <div class="services">
        <div class="container">
            <div class="row">

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
                    slidesPerView: 4,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className='mySwiper'>

                <SwiperSlide>
                    <div class="col-12 col-md-12">
                        <div class="serv-box">
                            <img src="/card.svg" alt="" className='card-1' />
                            <h4> Naxly as the Winners in Global Agency Awards </h4>
                            <p> Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups. </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12">
                        <div class="serv-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715002005/card-2_qziwdg.png" className='card-2' alt="" />
                            <h4> Expert Prespective Agency Awards </h4>
                            <p> Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups. </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 ">
                        <div class="serv-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715002009/card-3_peasb2.png" className="card-3" alt="" />
                            <h4> Business Prespective Global Agency Awards </h4>
                            <p> Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups. </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12">
                        <div class="serv-box">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715002015/card-4_zrxrvk.png" alt="" className="card-4" />
                            <h4> Value for Results in Global Agency Awards </h4>
                            <p> Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups. </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12">
                        <div class="serv-box">
                         <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715002020/card-5_gb6edu.png" alt="" className="card-5" />
                            <h4> Global Experience in Agency Awards </h4>
                            <p> Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups. </p>
                        </div>
                    </div>
                </SwiperSlide>

                </Swiper>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ServicesCard