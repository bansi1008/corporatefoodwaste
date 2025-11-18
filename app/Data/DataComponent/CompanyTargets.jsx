"use client";

import React from "react";
import styles from "./CompanyTargets.module.css";
import { FaLeaf, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { IoTargetSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function CompanyTargets() {
  const [targets, settargets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUkData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/getukdata", {
          method: "GET",
        });
        // if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        settargets(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUkData();
  }, []);

  if (loading) {
    return (
      <section className={styles.targets}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Company Targets</span>
            <h2 className={styles.title}>
              UK Food Retailers'{" "}
              <span className={styles.highlight}>
                Food Waste Reduction Targets
              </span>
            </h2>
            <p className={styles.subtitle}>
              Comprehensive overview of major UK supermarkets' commitments to
              reducing food waste
            </p>
          </div>
          <Loading size="large" text="Loading company targets..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.targets}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Company Targets</span>
            <h2 className={styles.title}>
              UK Retailers'{" "}
              <span className={styles.highlight}>
                Food Waste Reduction Targets
              </span>
            </h2>
          </div>
          <div className={styles.errorContainer}>
            <p className={styles.errorMessage}>{error}</p>
            <button
              className={styles.retryButton}
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.targets}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Company Targets</span>
          <h2 className={styles.title}>
            UK Retailers'{" "}
            <span className={styles.highlight}>
              Food Waste Reduction Targets
            </span>
          </h2>
          <p className={styles.subtitle}>
            Comprehensive overview of major UK supermarkets' commitments to
            reducing food waste
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Target</th>
                <th>Target Dates</th>
                <th>Metric</th>
                <th>Baseline</th>
              </tr>
            </thead>
            <tbody>
              {targets.map((item, index) => (
                <tr key={index} className={styles.row}>
                  <td className={styles.companyCell}>
                    <div className={styles.companyName}>
                      <FaLeaf className={styles.companyIcon} />
                      {item.name}
                    </div>
                  </td>
                  <td className={styles.targetCell}>
                    {Array.isArray(item.Target) && item.Target.length > 0 ? (
                      <div className={styles.targetList}>
                        {item.Target.map((targetItem, idx) => (
                          <React.Fragment key={idx}>
                            <span className={styles.targetItem}>
                              {targetItem}
                            </span>
                            {idx < item.Target.length - 1 && (
                              <FaArrowRight className={styles.arrowIcon} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <span>{item.Target || "No target specified"}</span>
                    )}
                  </td>
                  <td className={styles.dateCell}>
                    <div className={styles.milestonesWrapper}>
                      {item.Targetyear && item.Targetyear.length > 0 ? (
                        <>
                          <div className={styles.milestoneContainer}>
                            {item.Targetyear.map((year, idx) => (
                              <React.Fragment key={idx}>
                                <span
                                  className={`${styles.milestone} ${
                                    item.Targetyear.length === 1
                                      ? styles.milestoneSingle
                                      : idx === 0
                                      ? styles.milestone1
                                      : idx === item.Targetyear.length - 1
                                      ? styles.milestone2
                                      : styles.milestoneIntermediate
                                  }`}
                                >
                                  {item.Targetyear.length === 1 ? (
                                    <FaCalendarAlt
                                      className={styles.calendarIcon}
                                    />
                                  ) : (
                                    <span className={styles.milestoneIcon}>
                                      {idx + 1}
                                    </span>
                                  )}
                                  <span className={styles.milestoneYear}>
                                    {year}
                                  </span>
                                </span>
                                {idx < item.Targetyear.length - 1 && (
                                  <div className={styles.connector}></div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className={styles.milestoneLabel}>
                            {item.Targetyear.length === 1
                              ? "Single Target"
                              : `${item.Targetyear.length} Milestones`}
                          </div>
                        </>
                      ) : (
                        <div className={styles.noDate}>
                          <span className={styles.noDateText}>No Date Set</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className={styles.metricCell}>
                    {Array.isArray(item.Metric) && item.Metric.length > 0 ? (
                      <div className={styles.metricList}>
                        {item.Metric.map((metricItem, idx) => (
                          <React.Fragment key={idx}>
                            <span className={styles.metricItem}>
                              {metricItem}
                            </span>
                            {idx < item.Metric.length - 1 && (
                              <FaArrowRight className={styles.arrowIcon} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <span>{item.Metric || "Unknown"}</span>
                    )}
                  </td>
                  <td className={styles.baselineCell}>
                    <span className={styles.baseline}>{item.Baseline}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
