"use client"

import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import styles from "../styles/header.module.css";

export default function Navber() {
    const [isoepn, setisopen] = useState(false);

    return (
        <div className={styles.mobonav}>
            <nav className={isoepn ? styles.navActive : styles.nav}>
                <div className={styles.navUl}>
                    <div className={styles.navberIconsCeossWrp}>
                        <RxCross2 onClick={() => setisopen(!isoepn)} className={styles.navberIconsCeoss} />
                    </div>
                    <div className={styles.linkWrp}>
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#home">Home</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#feature">Features</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#skill">Skills</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#portfolio">Projects</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#reviews">Reviews</Link >
                        {/* <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#blog">Blogs</Link > */}
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="#contact">Contact</Link >
                    </div>
                </div>
                <div className={styles.transparantDiv} />
            </nav >
            <CgMenuRight onClick={() => setisopen(!isoepn)} className={styles.navberIcons} />
        </div >
    )
}
