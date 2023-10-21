import styles from "../styles/Contact.module.css";
import MassegeSend from "./MassegeSend";


export default function Contact() {

    return (
        <section id='contact' className={styles.contact}>
            <div>
                <span className="into">Reaching Out</span>
                <h1 className="heading">Contact Info</h1>
            </div>
            <div className={styles.contactWrp}>
                <div>
                    gsfdg
                </div>
                <div className={styles.orWrp}>
                    <h1>OR</h1>
                </div>
                <div>
                    <MassegeSend />
                </div>
            </div>
        </section>
    )
}
