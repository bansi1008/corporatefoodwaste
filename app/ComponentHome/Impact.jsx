"use client";

import styles from "./Impact.module.css";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaRecycle, FaHandHoldingHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

export default function Impact() {
  const impacts = [
    {
      icon: <GiEarthAfricaEurope />,
      value: "2.5M",
      label: "Food handled",
      description: "Total Food handled  across UK and EU food retailers",
      color: "#22c55e",
    },
    {
      icon: <FaRecycle />,
      value: "85%",
      label: "Unsold food",
      description: "Total unsold food across UK and EU food retailers",
      color: "#3b82f6",
    },
    {
      icon: <FaHandHoldingHeart />,
      value: "500K",
      label: "Human redistribution",
      description: "Food redirected to communities in need",
      color: "#f59e0b",
    },
  ];

  return (
    <section className={styles.impact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Our Impact</span>
          <h2 className={styles.title}>
            Making a <span className={styles.highlight}>Real Difference</span>
          </h2>
          <p className={styles.subtitle}>
            The companies tracked are reporting measurable progress in the fight
            against food waste
          </p>
        </div>

        <div className={styles.impactGrid}>
          {impacts.map((impact, index) => (
            <div key={index} className={styles.impactCard}>
              <div
                className={styles.iconCircle}
                style={{ backgroundColor: `${impact.color}15` }}
              >
                <div className={styles.icon} style={{ color: impact.color }}>
                  {impact.icon}
                </div>
              </div>
              <h3 className={styles.value}>{impact.value}</h3>
              <p className={styles.label}>{impact.label}</p>
              <p className={styles.description}>{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
