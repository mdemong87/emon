"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";


export default function Skills() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div id="skill" className="projctsWrp">
            <span className="into">All</span>
            <h2 className="heading">Skills</h2>
            <div className="skillsCardWrp">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <AiFillHtml5 class="skillsIcons" />
                    <p>HTML</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaCss3Alt class="skillsIcons" />
                    <p>CSS</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaBootstrap class="skillsIcons" />
                    <p>Bootstrap</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiTailwindcss class="skillsIcons" />
                    <p>Tailwind</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <IoLogoJavascript class="skillsIcons" />
                    <p>Javascript</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaReact class="skillsIcons" />
                    <p>React Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiNextdotjs class="skillsIcons" />
                    <p>Next Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaNodeJs class="skillsIcons" />
                    <p>Node Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiExpress class="skillsIcons" />
                    <p>Express Js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiMongodb class="skillsIcons" />
                    <p>MongoDB</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <SiFirebase class="skillsIcons" />
                    <p>Firebase</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <AiFillGithub class="skillsIcons" />
                    <p>git/github</p>
                </div>

            </div>
        </div>
    )
}
