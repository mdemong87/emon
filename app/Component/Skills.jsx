import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";


export default function Skills() {
    return (
        <div id="skill" className="projctsWrp">
            <span className="into">All</span>
            <h2 className="heading">Skills</h2>
            <div className="skillsCardWrp">
                <div>
                    <AiFillHtml5 class="skillsIcons" />
                    <p>HTML</p>
                </div>
                <div>
                    <FaCss3Alt class="skillsIcons" />
                    <p>CSS</p>
                </div>
                <div>
                    <FaBootstrap class="skillsIcons" />
                    <p>Bootstrap</p>
                </div>
                <div>
                    <SiTailwindcss class="skillsIcons" />
                    <p>Tailwind</p>
                </div>
                <div>
                    <IoLogoJavascript class="skillsIcons" />
                    <p>Javascript</p>
                </div>
                <div>
                    <FaReact class="skillsIcons" />
                    <p>React Js</p>
                </div>
                <div>
                    <SiNextdotjs class="skillsIcons" />
                    <p>Next Js</p>
                </div>
                <div>
                    <FaNodeJs class="skillsIcons" />
                    <p>Node Js</p>
                </div>
                <div>
                    <SiExpress class="skillsIcons" />
                    <p>Express Js</p>
                </div>
                <div>
                    <SiMongodb class="skillsIcons" />
                    <p>MongoDB</p>
                </div>
                <div>
                    <SiFirebase class="skillsIcons" />
                    <p>Firebase</p>
                </div>
                <div>
                    <AiFillGithub class="skillsIcons" />
                    <p>git/github</p>
                </div>

            </div>
        </div>
    )
}
