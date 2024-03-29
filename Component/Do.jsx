"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { AiOutlineAntDesign, AiOutlineAppstore, AiOutlineMobile, AiOutlineRise } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import styles from "../styles/do.module.css";
import DoCard from "./DoCard";


export default function Do() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <section id="feature" className={styles.dowrper}>
            <span className="into">Feature</span>
            <h1 className="heading">What I Do</h1>
            <p className={styles.para} data-aos="fade-left">
                Dedicated front-end engineer with a passion for crafting intuitive user interfaces. Specializing in clean, efficient code, I bring creativity and precision to deliver seamless and engaging web experiences for users.
            </p>

            <div className={styles.doCardWrper}>

                <DoCard icon={<AiOutlineMobile className={'docardIcon'} />} heading={"Mobile Apps"} discription={"I develop fast and easy to use Android and iOS Mobile Applications with amazing UI and UX."} />

                <DoCard icon={<AiOutlineAppstore className={'docardIcon'} />} heading={"Web Apps"} discription={"I design and develop amazing Websites that are easy to use, simple, fast and secure."} />

                <DoCard icon={<AiOutlineAntDesign className={'docardIcon'} />} heading={"UI Designs"} discription={"With the help of my amazing freelance partners, I provide eye catching Web and Mobile App UI / UX Designs"} />

                <DoCard icon={<MdOutlineBusinessCenter className={'docardIcon'} />} heading={"Business Experience"} discription={"I have been managing my own SAAS products and experience I gained from my own."} />

                <DoCard icon={<AiOutlineRise className={'docardIcon'} />} heading={"Strategy & Planning"} discription={"In freelance industry,no or least technical knowledge, I provide them with the best possible approach and business."} />

                <DoCard icon={<BiCodeAlt className={'docardIcon'} />} heading={"Software Maintenance"} discription={"Beside software development services, I also provide life time (charged) my team."} />

            </div>
        </section>
    )
}
