"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import heroImg from "../Images/heroimg.png";
import { IoLeafSharp } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";
import { FaSeedling } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.floatingEmoji}>
            <IoLeafSharp className={styles.leaf1} />
            <BiSolidLeaf className={styles.leaf2} />
            <FaSeedling className={styles.leaf3} />
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your <span className={styles.highlight}>Food Waste</span>
            <br />
            Into Sustainable Action
          </h1>

          <p className={styles.heroDescription}>
            The Corporate Food Waste Reporting Platform empowers UK and EU
            companies to track, report, and reduce food waste through
            data-driven insights. Join the movement towards UN SDG 12.3 and
            build a zero-waste future.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>
              Start Reporting
              <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.btnSecondary}>
              Watch Demo
              <span className={styles.playIcon}>▶</span>
            </button>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>50%</h3>
              <p className={styles.statLabel}>Waste Reduction</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>Companies</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>1M+</h3>
              <p className={styles.statLabel}>Tons Saved</p>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image
              src={heroImg}
              alt="Food Waste Management"
              width={600}
              height={600}
              priority
              className={styles.mainImage}
            />
            <div className={styles.floatingCard1}>
              <span className={styles.cardEmoji}>♻️</span>
              <span className={styles.cardText}>Eco-Friendly</span>
            </div>
            <div className={styles.floatingCard2}>
              <span className={styles.cardEmoji}>📊</span>
              <span className={styles.cardText}>Real-time Data</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
}
