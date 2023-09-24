"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from "next/link";
import { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { TbLiveView } from "react-icons/tb";
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
                <h1>This is heading</h1>
                <p>this is project discription</p>
                <div className={styles.singleprojectbtnwrp}>
                    <Link className={styles.singleprojectbtn} href={'#'}>
                        <AiFillGithub className={styles.singleprojecticons} />
                    </Link>
                    <Link className={styles.singleprojectbtn} href={'#'}>
                        <TbLiveView className={styles.singleprojecticons} />
                    </Link>
                </div>
            </div>
        </div>
    )
}