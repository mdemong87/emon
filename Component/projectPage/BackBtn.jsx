import Link from "next/link";
import styles from "../../styles/BackBtn.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function BackBtn(){
    return(
        <div className={styles.backBtnWrper}>
                <Link href={'/#portfolio'} className={styles.backbtn}>
                    <BiLeftArrowAlt className={styles.backIcons}/>
                </Link>
            </div>
    )
}