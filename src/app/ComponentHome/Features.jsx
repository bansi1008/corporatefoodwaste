"use client";

import styles from "./Features.module.css";
import {
  FaChartLine,
  FaLeaf,
  FaBullseye,
  FaRobot,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Real-Time Tracking",
      description:
        "Monitor food waste metrics in real-time with intuitive dashboards and comprehensive analytics.",
      color: "#22c55e",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability Goals",
      description:
        "Set and track reduction targets aligned with UN SDG 12.3 and global sustainability initiatives.",
      color: "#16a34a",
    },
    {
      icon: <FaBullseye />,
      title: "Target Management",
      description:
        "Define custom waste reduction goals and monitor progress with detailed metrics and insights.",
      color: "#15803d",
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Features</span>
          <h2 className={styles.title}>
            Everything You Need to{" "}
            <span className={styles.highlight}>Reduce Waste</span>
          </h2>
          <p className={styles.subtitle}>
            Powerful tools designed to help your organization track, analyze,
            and minimize food waste effectively.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <div className={styles.icon} style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

