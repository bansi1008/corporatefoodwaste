"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../Images/Logowaste.png";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <div className={styles.brand}>
              <Image src={logo} alt="WasteWatch Logo" width={45} height={45} />
              <span className={styles.brandName}>Waste food report</span>
            </div>
            <p className={styles.brandDescription}>
              Empowering companies across UK and EU to track, report, and reduce
              food waste through data-driven insights and sustainable action.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#data">Data</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#publication">Publication</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">API Reference</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <IoMdMail className={styles.contactIcon} />
                <span>info@wastewatch.com</span>
              </li>
              <li>
                <IoMdCall className={styles.contactIcon} />
                <span>+44 20 1234 5678</span>
              </li>
              <li>
                <IoLocationSharp className={styles.contactIcon} />
                <span>Newcastle, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Waste food reporting. All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy</a>
            <span className={styles.separator}>•</span>
            <a href="#">Terms</a>
            <span className={styles.separator}>•</span>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
