import Image from "next/image";
import img from "../public/IMG_20230331_055847.jpeg";
import styles from "../styles/hero.module.css";
import HeroBtns from "./HeroBtns";

export default function Hero() {
    return (
        <section id="home" className={styles.herowrp}>
            <div className={styles.text}>

                <span className={styles.into}>I will turn your ideas into reality</span>

                <div className={styles.info}>
                    <h3>Hi,</h3>
                    <h1>I'm Md Emon Hossen</h1>
                    <h2>Frontend Engineer</h2>

                    <p>
                    I have a passion for building beautiful, responsive, and user-friendly websites that provide an exceptional user experience.I enjoy keeping up-to-date with the latest web development trends and technologies and continuously strive to improve my skills and knowledge.
                    </p>
                </div>



                <HeroBtns />

            </div>
            <div className={styles.image}>
                <div className={styles.heroImageWrper}>
                        <div className={styles.secheroImageWrp}>
                            <Image className={styles.img} src={img} alt="Developer-photo" />
                        </div>
                </div>
            </div>
        </section>

    )
}
