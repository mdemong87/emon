import BackBtn from "../projectPage/BackBtn";
import styles from "../../styles/ProjectPageSingleProject.module.css";

export default function ProjectPageSingleProject(){
    return(
        <div>
            <BackBtn/>

            <section className={styles.bodySection}>
                <h1 className={styles.projectHeading}>Nanosoft.co.uk</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in esse tempore optio laudantium, cumque libero fugit velit tempora incidunt! Hic, cumque?</p>
            </section>


        </div>
    )
}