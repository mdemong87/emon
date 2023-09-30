"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from "next/link";
import { useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../../styles/singleProject.module.css";


export default function SingleProject() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className={styles.SingleProjectWrp} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" >
            <div>
                gdfs
            </div>
            <div className={styles.singleprojectDetailseWrper}>
                <h1>This is heading for a project...</h1>
                <div className={styles.exploreWrp}>
                    <Link className={styles.exploreLink} href={'/project'}>
                        <span>Explore</span>
                        <AiOutlineArrowRight className={styles.icons} />
                    </Link>
                </div>
            </div>
        </div>
    )
}