"use client";

import styles from "./DataHero.module.css";
import { FaDatabase, FaChartBar, FaFileAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

export default function DataHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Data & Analytics</span>
          <h1 className={styles.title}>
            UK Food Waste{" "}
            <span className={styles.highlight}>Data Dashboard</span>
          </h1>
          <p className={styles.description}>
            Comprehensive visualization of food waste reduction targets,
            donations, and corporate commitments across major UK retailers from
            2016 to 2023.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaDatabase />
              </div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>11</div>
                <div className={styles.statLabel}>Retailers Tracked</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaChartBar />
              </div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>7</div>
                <div className={styles.statLabel}>Years of Data</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <IoStatsChart />
              </div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>75</div>
                <div className={styles.statLabel}>Documents</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaFileAlt />
              </div>
              <div className={styles.statInfo}>
                <div className={styles.statValue}>10+</div>
                <div className={styles.statLabel}>Alliances</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
