import styles from "../styles/Contact.module.css";
import MassegeSend from "./MassegeSend";
import SingleLinkForContact from "./SingleLinkForContact";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";

export default function Contact() {

    return (
        <section id='contact' className={styles.contact}>
            <div>
                <span className="into">Reaching Out</span>
                <h1 className="heading">Contact Info</h1>
            </div>
            <div className={styles.contactWrp}>
                <div className={styles.allLinkWrper}>
                    <SingleLinkForContact icons={<SlSocialFacebook className="LinkIcons"/>} link={"https://www.facebook.com/mdemong87"} title={"Facebook"}/>
                    <SingleLinkForContact icons={<FaInstagram className="LinkIcons"/>} link={"https://www.instagram.com/mdemong87"} title={"Instagram"}/>
                    <SingleLinkForContact icons={<FiLinkedin className="LinkIcons"/>} link={"https://www.linkedin.com/in/mdemong87"} title={"Linkedin"}/>
                    <SingleLinkForContact icons={<TbBrandGithub className="LinkIcons"/>} link={"https://www.github.com/mdemong87"} title={"Github"}/>
                    <SingleLinkForContact icons={<MdOutlineEmail className="LinkIcons"/>} link={"mailto:mdemong87@gmail.com"} title={"Email"}/>
                    <SingleLinkForContact icons={<FaWhatsapp className="LinkIcons"/>} link={"https://wa.me/01986404986"} title={"WhatsApp"}/>
                    <SingleLinkForContact icons={<TbBrandYoutube className="LinkIcons"/>} link={"https://www.youtube.com/@mdemong87"} title={"Youtube"}/>
                    <SingleLinkForContact icons={<TfiLocationPin className="LinkIcons"/>} link={"https://maps.app.goo.gl/FvKmTbp1VepihAdT9"} title={"Location"}/>
                </div>
                <div>
                    <MassegeSend />
                </div>
            </div>
        </section>
    )
}
