"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';


export default function DoCard({ icon, heading, discription }) {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="doCradwp">
            <h1>{icon}</h1>
            <h1 className="docardheading">{heading}</h1>
            <p className="docarddis">{discription}</p>
        </div>
    )
}
