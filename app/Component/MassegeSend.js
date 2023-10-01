'use client'

import { BsFillSendFill } from "react-icons/bs";
import styles from "../../styles/Masseagesend.module.css";

export default function MassegeSend() {
    return (
        <div className={styles.MassegeSendWrp}>
            <input name="name" type="text" placeholder="Full Name" />
            <input name="email" type="email" placeholder="Email Address" />
            <input name="subject" type="text" placeholder="Subject" />
            <textarea placeholder="Massege..."></textarea>
            <div className={styles.btnWrp}>
                <button className={styles.sendBtn}>
                    <span>Send</span>
                    <BsFillSendFill />
                </ button>
            </div>
        </div>
    )
}
