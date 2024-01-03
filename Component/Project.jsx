import cmshsProject from "../public/cmshsProject.png";
import nanosoft from "../public/nanoProject.png";
import styles from "../styles/project.module.css";
import SingleProject from "./SingleProject";

export default function Project() {
    return (
        <section id="portfolio" className={styles.projctsWrp}>
            <span className="into">Top Recent</span>
            <h2 className="heading">Projects</h2>
            <div className={styles.projectsCardWrp}>

                <SingleProject img={cmshsProject} heading={'cmshs.edu.bd'} dis={'Chandash Mokhdum Shah High School,Where Learning Meets Inspiration.'} />

                <SingleProject img={nanosoft} heading={'nanosoft.co.uk'} dis={'Nanosoft Tech Ltd, Provide cutting-edge software solutions.'} />

                <SingleProject img={nanosoft} heading={'nanosoft.co.uk'} dis={'Nanosoft, the leading provider of cutting-edge software solutions.'} />

            </div>
        </section>
    )
}
