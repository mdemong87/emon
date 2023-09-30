"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import styles from "../../styles/doCard.module.css";


export default function DoCard({ icon, heading, discription }) {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className={styles.doCradwp}>
            <h1 className={styles.icons}>{icon}</h1>
            <h1 className={styles.docardheading}>{heading}</h1>
            <p className={styles.docarddis}>{discription}</p>
        </div>
    )
}
