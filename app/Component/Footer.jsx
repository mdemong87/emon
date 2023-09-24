import { CgMenuRight } from "react-icons/cg";
import { ImLocation } from "react-icons/im";
import styles from '../../styles/footer.module.css';


export default function Footer() {
  return (
    <div id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrp}>
          <div className={styles.footerlogoWrp}>
            {/* <Image className="footer-logo" src={logo} alt="footer-logo" /> */}
            <CgMenuRight className={styles.logoIcon} />
            <h4 className={styles.logoText}>Emon</h4>
          </div>
          <div className={styles.reachmeoutWrp}>
            <h2>Reach Me Out</h2>
            <p>Discuss A Project or Just Want To Say Hi ? My DM's are always OPEN</p>
            <div className={styles.footerlocatonWrp}>
              <ImLocation className={styles.locationIcons} />
              <span>Gazipur,<br />Dhaka,Bangladesh</span>
            </div>
            <div>
              all contact icons here
            </div>
          </div>
        </div>
        <div className={styles.copyRightErp}>
          <p>&copy; 2023 || All Right Reserve Md Emon Hossen </p>
        </div>
      </div>
    </div>
  )
}
