"use client";

import { useState } from "react";
import styles from "./DataDisclaimer.module.css";
import {
  IoWarningOutline,
  IoClose,
  IoInformationCircle,
} from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";

export default function DataDisclaimer() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Banner */}
      <div
        className={`${styles.disclaimer} ${
          isMinimized ? styles.minimized : ""
        }`}
      >
        <div className={styles.container}>
          {/* Animated Border */}
          <div className={styles.animatedBorder}></div>

          {!isMinimized ? (
            <>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <IoInformationCircle className={styles.icon} />
                </div>
                <div className={styles.shimmer}></div>
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <span className={styles.badge}>Data Notice</span>
                  <h3 className={styles.title}>Research-Based Information</h3>
                </div>
                <p className={styles.text}>
                  All data presented on this platform is carefully collected and
                  analyzed by our research team. Please note that minor
                  variations may occur due to differences in data sources,
                  methodologies, or reporting periods across organizations.
                </p>
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.minimizeBtn}
                  onClick={() => setIsVisible(false)}
                  aria-label="Got it"
                  title="Dismiss notification"
                >
                  <span className={styles.btnText}>Got it</span>
                </button>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsVisible(false)}
                  aria-label="Close"
                  title="Close"
                >
                  <IoClose />
                </button>
              </div>
            </>
          ) : (
            <div
              className={styles.minimizedContent}
              onClick={() => setIsMinimized(false)}
            >
              <IoInformationCircle className={styles.minimizedIcon} />
              <span className={styles.minimizedText}>View Data Notice</span>
            </div>
          )}
        </div>
      </div>

      {/* <div className={styles.alertBar}>
        <div className={styles.alertContent}>
          <div className={styles.alertIcon}>
            <IoWarningOutline />
          </div>
          <p className={styles.alertText}>
            <strong>Data Disclaimer:</strong> Information collected and analyzed
            by our research team. Variations may occur due to different sources,
            methodologies, or reporting timelines.
          </p>
        </div>
        <div className={styles.alertStripe}></div>
      </div> */}
    </>
  );
}
