"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import styles from "../styles/reviewSlide.module.css";

import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";

import { useSwiper } from 'swiper/react';
import Image from 'next/image';


export default function ReciewSlide({photo,name,position,heading,via,dis}) {

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
                        {
                            photo ? <Image className={styles.reviewerImage} src={photo} width={500} height={500} alt="Reviewer-Image"/> : <FaUserAlt className={styles.reviewProfileIcon} /> 
                        }
                    </div>
                    <div className={styles.profileinfo}>
                        <h2>{name}</h2>
                        <p>{position}</p>
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
                                <h2>{heading}</h2>
                                <p>via <b>{via}</b></p>
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
                            <p>{dis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
