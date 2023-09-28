"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { AiOutlineAntDesign, AiOutlineAppstore, AiOutlineMobile, AiOutlineRise } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import styles from "../../styles/do.module.css";
import DoCard from "./DoCard";


export default function Do() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <section id="do" className={styles.dowrper}>
            <span className="into">Feature</span>
            <h1 className="heading">What I Do</h1>
            <p className={styles.para} data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam blanditiis numquam blanditiis tempora ea alias. Perferendis, dicta nobis? Repudiandae, eaque ullam. tempora ea alias. Perferendis, dicta nobis? Repudiandae, eaque ullam.</p>

            <div className={styles.doCardWrper}>

                <DoCard icon={<AiOutlineMobile className={styles.docardIcon} />} heading={"Mobile Apps"} discription={"I develop fast and easy to use Android and iOS Mobile Applications with amazing UI and UX."} />

                <DoCard icon={<AiOutlineAppstore className={styles.docardIcon} />} heading={"WEB Apps"} discription={"I design and develop amazing Websites that are easy to use, simple, fast and secure."} />

                <DoCard icon={<AiOutlineAntDesign className={styles.docardIcon} />} heading={"UI Designs"} discription={"With the help of my amazing freelance partners, I provide eye catching Web and Mobile App UI / UX Designs"} />

                <DoCard icon={<MdOutlineBusinessCenter className={styles.docardIcon} />} heading={"Business Experience"} discription={"I have been managing my own SAAS products and experience I gained from my own startups helps me to develop better and scalable softwares and to implement better business logic for my clients."} />

                <DoCard icon={<AiOutlineRise className={styles.docardIcon} />} heading={"Strategy & Planning"} discription={"In freelance industry, I often meet individuals having no or least technical knowledge, I provide them with the best possible approach and business logic of the software they need with in their budget."} />

                <DoCard icon={<BiCodeAlt className={styles.docardIcon} />} heading={"Software Maintenance"} discription={"Beside software development services, I also provide life time (charged) bug fixes and maintenance services (Only for the projects that are developed by me or my team."} />

            </div>
        </section>
    )
}
