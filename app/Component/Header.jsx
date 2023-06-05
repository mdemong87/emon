
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/logo.png";
import Container from "./Container";

export default function Header() {

  const [isoepn, setisopen] = useState(false);

  return (
    <div className='headerWrper'>
      <Container>
        <div className="headerContainer">
          <div className="logoWrper">
            <Image className="logo" src={logo} />
          </div>
          <div className="mobonav">
            <nav className="nav">
              <ul>
                <li>
                  <Link href="#home">Home</Link >
                </li>

                <li>
                  <Link href="#feature">Feature</Link >
                </li>
                <li>
                  <Link href="#skill">Skills</Link >
                </li>
                <li>
                  <Link href="#portfolio">Portfolio</Link >
                </li>
                <li>
                  <Link href="#reviews">Reviews</Link >
                </li>
                <li>
                  <Link href="#contact">Contact</Link >
                </li>
              </ul>
            </nav>
            {isoepn ? <RxCross2 onClick={() => setisopen(!isoepn)} className="navberIcons" /> : <FaBars onClick={() => setisopen(!isoepn)} className="navberIcons" />}

          </div>
        </div>
        {isoepn && <nav className="smallscreenNav">
          <ul>
            <li>
              <Link href="#home">Home</Link >
            </li>

            <li>
              <Link href="#feature">Feature</Link >
            </li>
            <li>
              <Link href="#skill">Skills</Link >
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link >
            </li>
            <li>
              <Link href="#reviews">Reviews</Link >
            </li>
            <li>
              <Link href="#contact">Contact</Link >
            </li>
          </ul>
        </nav>}
      </Container>
    </div>
  )
}
