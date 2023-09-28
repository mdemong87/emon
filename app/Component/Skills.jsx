"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import styles from "../../styles/skill.module.css";


export default function Skills() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <section id="skill" className={styles.SkillWrp}>
            <div>
                <span className="into">All</span>
                <h2 className="heading">Skills</h2>
            </div>
            <div className={styles.skillsCardWrp}>
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
        </section>
    )
}
