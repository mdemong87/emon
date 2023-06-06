"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';


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
        <div id="reviews" className="projctsWrp">
            <span className="into">What Client Say</span>
            <h2 className="heading">Reviews</h2>
            <div className="reviewsCardWrp">
                <div data-aos="flip-left" className="reviewProfile">
                    <div className="reviewProfilePhoto">
                        <FaUserAlt className="reviewProfileIcon" />
                    </div>
                    <div className="profileinfo">
                        <h2>Md Emon Hossen</h2>
                        <p>CEO, DevEmon.com</p>
                    </div>
                </div>
                <div className="reciewDitailse">
                    <div className="reviewController">
                        <div className="cutaep">
                            <IoMdQuote className="quoteIcon" />
                        </div>
                        <div className="arrowbtns">
                            <div data-aos="fade-right" onClick={() => swiper.slidePrev()}>
                                <AiOutlineArrowLeft className="rightAndLedtWArrowIcons" />
                            </div>
                            <div data-aos="fade-left" onClick={() => swiper.slideNext()}>
                                <AiOutlineArrowRight className="rightAndLedtWArrowIcons" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="reviewditaiseinfo">
                        <div className="reviewdetailseInfoheading">
                            <div>
                                <h2>Lorem ipsum dolor,dolor, sit amet consectetur adipisicing elit.</h2>
                                <p>via <b>fiver</b></p>
                            </div>
                            <div>
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                            </div>
                        </div>
                        <div className="reviewdetailseInfoditailse">
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
