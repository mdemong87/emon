"use client"

import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import styles from "../../styles/herobtn.module.css";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

export default function HeroBtns() {

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 0 });
    }, [])


    return (
        <div className={styles.hersbtnsWrp}>
            <div className={styles.leftBtnWrp}>
                <p>FIND ME</p>
                <div className={styles.leftBtns}>
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <AiFillFacebook className={styles.leftIcons} />
                    </Link>
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <AiFillGithub className={styles.leftIcons} />
                    </Link>
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <AiFillLinkedin className={styles.leftIcons} />
                    </Link>
                </div>
            </div>
            <div className={styles.leftBtnWrp}>
                <p>BEST SKILL ON</p>
                <div className={styles.leftBtns}>
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <SiTailwindcss className={styles.rightIcons} />
                    </Link>
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <FaReact className={styles.rightIcons} />
                    </Link>
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className={styles.leftAndRightLink}>
                        <SiNextdotjs className={styles.rightIcons} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
