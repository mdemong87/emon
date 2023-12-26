"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from "next/link";
import Image from 'next/image';
import { useEffect } from 'react';
import nanosoft from "../public/nanoProject.png";
import styles from "../styles/singleProject.module.css";


export default function SingleProject() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <Link href={'/project'} className={styles.SingleProjectWrp} data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" >
            <div className={styles.ProjectImageWrper}>
                <Image className={styles.projectImage} src={nanosoft} width={500} hight={500} alt="project-image"/>
            </div>
            <div className={styles.singleprojectDetailseWrper}>
                <h1>Nanosoft.co.uk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </Link>
    )
}