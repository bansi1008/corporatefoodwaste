"use client";

import React from "react";
import styles from "./Loading.module.css";

export default function Loading({ fullScreen = false, size = "medium", text = "Loading..." }) {
  const sizeClass = styles[size] || styles.medium;

  if (fullScreen) {
    return (
      <div className={styles.fullScreenContainer}>
        <div className={styles.loadingWrapper}>
          <div className={`${styles.spinner} ${sizeClass}`}>
            <div className={styles.leaf1}>🍃</div>
            <div className={styles.leaf2}>🍃</div>
            <div className={styles.leaf3}>🍃</div>
          </div>
          {text && <p className={styles.loadingText}>{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${sizeClass}`}>
        <div className={styles.leaf1}>🍃</div>
        <div className={styles.leaf2}>🍃</div>
        <div className={styles.leaf3}>🍃</div>
      </div>
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
}

// Alternative loading styles
export function LoadingDots({ text = "Loading" }) {
  return (
    <div className={styles.dotsContainer}>
      <span className={styles.dotsText}>{text}</span>
      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export function LoadingSpinner({ size = "medium", color = "green" }) {
  const sizeClass = styles[`spinner${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const colorClass = styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`];

  return (
    <div className={styles.spinnerContainer}>
      <div className={`${styles.circleSpinner} ${sizeClass} ${colorClass}`}></div>
    </div>
  );
}

export function LoadingBar({ progress = null }) {
  return (
    <div className={styles.barContainer}>
      <div className={styles.bar}>
        <div 
          className={styles.barProgress} 
          style={progress !== null ? { width: `${progress}%` } : {}}
        ></div>
      </div>
    </div>
  );
}

export function LoadingPulse() {
  return (
    <div className={styles.pulseContainer}>
      <div className={styles.pulse}></div>
      <div className={styles.pulse}></div>
      <div className={styles.pulse}></div>
    </div>
  );
}


