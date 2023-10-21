"use client"
import styles from "../styles/reviewSlide.module.css";
import ReciewSlide from "./ReciewSlide";

// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function Reviews() {


    return (
        <section className={styles.reviews} id="reviews">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1100}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
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

        </section>
    )
}
