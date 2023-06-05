"use client"
import ReciewSlide from "../Component/ReciewSlide";


// import Swiper core and required modules
import { A11y, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function Reviews() {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            loop={true}
            speed={1100}
            pagination={{ clickable: true }
            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <ReciewSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ReciewSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ReciewSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ReciewSlide />
            </SwiperSlide>

        </Swiper >
    )
}
