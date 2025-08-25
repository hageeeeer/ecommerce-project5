'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
import blog1 from '../../assets/images/blog-img-1.jpeg'
import blog2 from '../../assets/images/blog-img-2.jpeg'

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
export default function Slider() {
    return (
        <div className="md:flex hidden">
            <div className="w-3/4">
                <Swiper
                    
                    slidesPerView={1}

                >
                    <SwiperSlide>
                        <Image className="w-full h-[400px] object-cover" alt='' src={slider1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full h-[400px] object-cover" alt='' src={slider2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full h-[400px] object-cover" alt='' src={slider3} />
                    </SwiperSlide>


                </Swiper>
            </div>
            <div className="w-1/4">
                <Image className="w-full h-[200px] object-cover" alt='' src={blog1} />
                <Image className="w-full h-[200px] object-cover" alt='' src={blog2} />
            </div>
        </div>
    )
}
