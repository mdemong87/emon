import Image from "next/image";
import img from "../../public/IMG_20230331_055847.jpeg";
import styles from "../../styles/hero.module.css";
import HeroBtns from "./HeroBtns";

export default function Hero() {
    return (
        <section id="home" className={styles.herowrp}>
            <div className={styles.text}>

                <span className={styles.into}>I will turn your ideas into reality</span>

                <div className={styles.info}>
                    <h3>Hi,</h3>
                    <h1>I'm Md Emon Hossen</h1>
                    <h2>Frontend Developer</h2>

                    <p>I am a Full Stack Software Developer, I provides Web & Mobile App Development services and complete technical solutions for businesses of any size and nature, My services has helped startups, companies and individuals all around the globe.</p>
                </div>



                <HeroBtns />

            </div>
            <div className={styles.image}>
                <div className={styles.heroImageWrper}>
                    <div className={styles.secheroImageWrp}>
                        <Image className={styles.img} src={img} />
                    </div>
                </div>
            </div>
        </section>

    )
}
