
"use client"
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import styles from "../../styles/header.module.css";
import Container from "./Container";

export default function Header() {

  const [isoepn, setisopen] = useState(false);

  return (
    <div className={styles.headerWrper}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.logoWrper}>
            {/* <Image className={styles.logo} src={logo} /> */}
            <CgMenuRight className={styles.logoIcon} />
            <h4 className={styles.logoText}>Emon</h4>
          </div>
          <div className={styles.mobonav}>
            {/* */}
            <nav className={isoepn ? styles.navActive : styles.nav}>
              <ul className={styles.navUl}>
                <div className={styles.navberIconsCeossWrp}>
                  <RxCross2 onClick={() => setisopen(!isoepn)} className={styles.navberIconsCeoss} />
                </div>
                <div className={styles.linkWrp}>
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#home">Home</Link >
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#do">Feature</Link >
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#skill">Skills</Link >
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#portfolio">Portfolio</Link >
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#reviews">Reviews</Link >
                  <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#contact">Contact</Link >
                </div>
              </ul>
              <div className={styles.transparantDiv} />
            </nav>
            <CgMenuRight onClick={() => setisopen(!isoepn)} className={styles.navberIcons} />
          </div>
        </div>
      </Container >
    </div >
  )
}
