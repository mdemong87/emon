import styles from "../styles/project.module.css";
import SingleProject from "./SingleProject";

export default function Project() {
    return (
        <section id="portfolio" className={styles.projctsWrp}>
            <span className="into">Recent</span>
            <h2 className="heading">Projects</h2>
            <div className={styles.projectsCardWrp}>
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        </section>
    )
}
