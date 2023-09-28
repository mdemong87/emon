"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import styles from "../../styles/reviewSlide.module.css";

import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";

import { useSwiper } from 'swiper/react';


export default function ReciewSlide() {

    const swiper = useSwiper();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="reviews">
            <span className="into">What Client Say</span>
            <h2 className="heading">Reviews</h2>
            <div className={styles.reviewsCardWrp}>
                <div data-aos="flip-left" className={styles.reviewProfile}>
                    <div className={styles.reviewProfilePhoto}>
                        <FaUserAlt className={styles.reviewProfileIcon} />
                    </div>
                    <div className={styles.profileinfo}>
                        <h2>Md Emon Hossen</h2>
                        <p>CEO, DevEmon.com</p>
                    </div>
                </div>
                <div className={styles.reciewDitailse}>
                    <div className={styles.reviewController}>
                        <div className={styles.cutaep}>
                            <IoMdQuote className={styles.quoteIcon} />
                        </div>
                        <div className={styles.arrowbtns}>
                            <div data-aos="fade-right" onClick={() => swiper.slidePrev()}>
                                <AiOutlineArrowLeft className={styles.rightAndLedtWArrowIcons} />
                            </div>
                            <div data-aos="fade-left" onClick={() => swiper.slideNext()}>
                                <AiOutlineArrowRight className={styles.rightAndLedtWArrowIcons} />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={styles.reviewditaiseinfo}>
                        <div className={styles.reviewdetailseInfoheading}>
                            <div>
                                <h2>Lorem ipsum dolor,dolor, sit amet consectetur adipisicing elit.</h2>
                                <p>via <b>fiver</b></p>
                            </div>
                            <div>
                                <AiFillStar className={styles.starIcon} />
                                <AiFillStar className={styles.starIcon} />
                                <AiFillStar className={styles.starIcon} />
                                <AiFillStar className={styles.starIcon} />
                                <AiFillStar className={styles.starIcon} />
                            </div>
                        </div>
                        <div className={styles.reviewdetailseInfoditailse}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odio, sint corrupti voluptatem dolores perferendis rerum nulla quae nesciunt provident!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
