"use client"
import cmshsHeadSir from "../public/cmshsHeadSir.jpg";
import nanosoft from "../public/nanosoft.jpg";
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
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <ReciewSlide photo={nanosoft} name={'Mr Istiaque Choudhury'} position={'MD, nanosoft.co.uk'} heading={'Nanosoft.co.uk Managing Director Review...'} via={'Linkdein'} dis={'From the initial consultation to the final product delivery, Nanosoft displays highly professionalism!'} />
                </SwiperSlide>


                <SwiperSlide>
                    <ReciewSlide photo={cmshsHeadSir} name={'Anamul Haque'} position={'Headmaster, cmshs.edu.bd'} heading={'cmshs.edu.bd Headmaster Review...'} via={'Linkdein'} dis={'The Service were very impressed with the all aspects of our new website. We would highly recommend to anyone looking to build a new website!'} />
                </SwiperSlide>

            </Swiper >

        </section>
    )
}
