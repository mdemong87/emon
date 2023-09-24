"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import styles from "../../styles/skill.module.css";


export default function Skills() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="skill" className={styles.projctsWrp}>
            <div>
                <span className={styles.into}>All</span>
                <h2 className={styles.heading}>Skills</h2>
            </div>
            <div className={styles.skillsCardWrp}>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <AiFillHtml5 className={styles.skillsIcons} />
                    <p>HTML</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaCss3Alt className={styles.skillsIcons} />
                    <p>CSS</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaBootstrap className={styles.skillsIcons} />
                    <p>Bootstrap</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiTailwindcss className={styles.skillsIcons} />
                    <p>Tailwind</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <IoLogoJavascript className={styles.skillsIcons} />
                    <p>Javascript</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaReact className={styles.skillsIcons} />
                    <p>React Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiNextdotjs className={styles.skillsIcons} />
                    <p>Next Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaNodeJs className={styles.skillsIcons} />
                    <p>Node Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiExpress className={styles.skillsIcons} />
                    <p>Express Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiMongodb className={styles.skillsIcons} />
                    <p>MongoDB</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiFirebase className={styles.skillsIcons} />
                    <p>Firebase</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <AiFillGithub className={styles.skillsIcons} />
                    <p>git/github</p>
                </div>

            </div>
        </div>
    )
}
