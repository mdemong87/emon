import { AiOutlineAntDesign, AiOutlineAppstore, AiOutlineMobile, AiOutlineRise } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import DoCard from "./DoCard";


export default function Do() {
    return (
        <div id="feature" className="dowrper">
            <span className="into">Feature</span>
            <h1 classN className="docardIcon" ame="heading">What I Do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam blanditiis numquam blanditiis tempora ea alias. Perferendis, dicta nobis? Repudiandae, eaque ullam. tempora ea alias. Perferendis, dicta nobis? Repudiandae, eaque ullam.</p>

            <div className="doCardWrper">

                <DoCard icon={<AiOutlineMobile className="docardIcon" />} heading={"Mobile Apps"} discription={"I develop fast and easy to use Android and iOS Mobile Applications with amazing UI and UX."} />

                <DoCard icon={<AiOutlineAppstore className="docardIcon" />} heading={"WEB Apps"} discription={"I design and develop amazing Websites that are easy to use, simple, fast and secure."} />

                <DoCard icon={<AiOutlineAntDesign className="docardIcon" />} heading={"UI Designs"} discription={"With the help of my amazing freelance partners, I provide eye catching Web and Mobile App UI / UX Designs"} />

                <DoCard icon={<MdOutlineBusinessCenter className="docardIcon" />} heading={"Business Experience"} discription={"I have been managing my own SAAS products and experience I gained from my own startups helps me to develop better and scalable softwares and to implement better business logic for my clients."} />

                <DoCard icon={<AiOutlineRise className="docardIcon" />} heading={"Strategy & Planning"} discription={"In freelance industry, I often meet individuals having no or least technical knowledge, I provide them with the best possible approach and business logic of the software they need with in their budget."} />

                <DoCard icon={<BiCodeAlt className="docardIcon" />} heading={"Software Maintenance"} discription={"Beside software development services, I also provide life time (charged) bug fixes and maintenance services (Only for the projects that are developed by me or my team."} />

            </div>
        </div>
    )
}
