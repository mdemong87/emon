import Image from "next/image";
import logo from "../public/logo.png";
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrp}>
          <div className={styles.footerlogoWrp}>
            <Image className="footer-logo" height={500} width={500} src={logo} alt="footer-logo" />
          </div>
        </div>
        <div className={styles.copyRightErp}>
          <p>&copy; 2023 || All Right Reserve Md Emon Hossen </p>
        </div>
      </div>
    </footer>
  )
}
