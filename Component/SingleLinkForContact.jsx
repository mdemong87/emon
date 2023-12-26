import Link from "next/link";
import styles from "../styles/SingleLinkForContact.module.css";
import { CiShare1 } from "react-icons/ci";


export default function SingleLinkForContact({icons,title,link}){
    return(
        <Link href={link} target="blank" className={styles.singleLinkWrper}>
            <div className={styles.singleLinkItemsWrper}>
                {icons}
                <span>{title}</span>
            </div>
            <div className={styles.shareIconsWrper}>
                <CiShare1 className={styles.shareIcon}/>
            </div>
        </Link>
    )
}