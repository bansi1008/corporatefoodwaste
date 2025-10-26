"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/Logowaste.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="Waste Food Logo" width={50} height={50} />
          <span className={styles.brandName}>Waste food report</span>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="/Data" className={styles.navLink}>
              Data
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About Us
            </a>
          </li>
          <li>
            <a href="#publication" className={styles.navLink}>
              Publication
            </a>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
    </nav>
  );
}
