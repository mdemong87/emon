"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from 'react';
import styles from "../styles/singleProject.module.css";


export default function SingleProject({ img, heading, dis }) {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <Link href={'/project'} className={styles.SingleProjectWrp} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" >
            <div className={styles.ProjectImageWrper}>
                <Image className={styles.projectImage} src={img} width={500} hight={500} alt="project-image" />
            </div>
            <div className={styles.singleprojectDetailseWrper}>
                <h1>{heading}</h1>
                <p>{dis}</p>
            </div>
        </Link>
    )
}