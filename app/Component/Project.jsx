import styles from "../../styles/project.module.css";
import SingleProject from "./SingleProject";

export default function Project() {
    return (
        <div id="portfolio" className={styles.projctsWrp}>
            <span className={styles.into}>Recent</span>
            <h2 className={styles.heading}>Projects</h2>
            <div className={styles.projectsCardWrp}>
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        </div>
    )
}
