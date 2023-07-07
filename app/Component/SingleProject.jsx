"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbLiveView } from "react-icons/tb";


export default function SingleProject() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className="SingleProjectWrp" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" >
            <div>
                gdfs
            </div>
            <div className="singleprojectDetailseWrper">
                <h1>This is heading</h1>
                <div className="singleprojectbtnwrp">
                    <Link className="singleprojectbtn" href={'#'}>
                        <AiFillGithub className="singleprojecticons" />
                    </Link>
                    <Link className="singleprojectbtn" href={'#'}>
                        <TbLiveView className="singleprojecticons" />
                    </Link>
                </div>
            </div>
        </div>
    )
}