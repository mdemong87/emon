"use client"

import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

export default function HeroBtns() {

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 0 });
    }, [])


    return (
        <div className="hersbtnsWrp">
            <div className="leftBtnWrp">
                <p>FIND ME</p>
                <div className="leftBtns">
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <AiFillFacebook className="leftIcons" />
                    </Link>
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <AiFillGithub className="leftIcons" />
                    </Link>
                    <Link data-aos="fade-right" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <AiFillLinkedin className="leftIcons" />
                    </Link>
                </div>
            </div>
            <div className="leftBtnWrp">
                <p>BEST SKILL ON</p>
                <div className="leftBtns">
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <BsBootstrapFill className="rightIcons" />
                    </Link>
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <FaReact className="rightIcons" />
                    </Link>
                    <Link data-aos="fade-left" data-aos-offset="0" href={'/'} className="leftAndRightLink">
                        <SiNextdotjs className="rightIcons" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
