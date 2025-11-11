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
        const res = await fetch("/api/ukdata");
        if (!res.ok) throw new Error("Failed to fetch data");
        settargets(res.data);
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

  // const target = [
  //   {
  //     company: "ALDI",
  //     target: "Reduce food waste by 20% by 2025, and halve it by 2030",
  //     date: [2025],
  //     //date2: "2030",
  //     metric: "Unknown",
  //     baseline: "2016/17",
  //   },
  //   {
  //     company: "ASDA",
  //     target: "Reduce Food Waste by 20% and halve it by 2030",
  //     date: [2030],
  //     metric: "Food Waste to Energy",
  //     baseline: "2014/15",
  //   },
  //   {
  //     company: "CO-OP",
  //     target:
  //       "Reduce food waste generated in our stores and depots by 50% by 2030 compared to 2015",
  //     date: [2030],

  //     metric: "Food Waste",
  //     baseline: "2014/15",
  //   },
  //   {
  //     company: "ICELAND",
  //     target: "50% reduction of food waste in our own operations by 2030",
  //     date: [2030],
  //     metric: "Food Waste/Food Handled",
  //     baseline: "2017/18",
  //   },
  //   {
  //     company: "LIDL",
  //     target:
  //       "Reduce food waste by 40% since 2016 (relative to business growth) by 2025 and 50% by 2030",
  //     date: [2025, 2030],

  //     metric:
  //       "Tonnes operational food waste per average store m² in updated year",
  //     baseline: "2015/16",
  //   },
  //   {
  //     company: "M&S",
  //     target:
  //       "Halve UK retail food waste by 2030, maximising donations of surplus",
  //     date: [2030],
  //     metric: "Food Waste",
  //     baseline: "2017/18",
  //   },
  //   {
  //     company: "Morrisons",
  //     target: "50% reduction in operational food waste in stores by 2030",
  //     date: [2030],
  //     metric: "Food waste/Food Handled",
  //     baseline: "2016/17",
  //   },
  //   {
  //     company: "Sainsbury",
  //     target: "Reduce food waste by 50 per cent by 2030",
  //     date: [2030],
  //     metric: "Food waste to anaerobic digestion",
  //     baseline: "2019/20",
  //   },
  //   {
  //     company: "Tesco",
  //     target:
  //       "85% of unsold food safe for human consumption redistributed by 2025. Reduce food waste by 50% by 2025",
  //     date: [2025],
  //     metric: "Food Waste/Food Handled",
  //     baseline: "2016/17",
  //   },
  //   {
  //     company: "Waitrose",
  //     target: "Reduce operational food waste by 50% against a 2018 baseline",
  //     date: [],
  //     metric: "Food Waste/Food Handled",
  //     baseline: "2017/18",
  //   },
  //   {
  //     company: "OCADO",
  //     target:
  //       "Reduce food waste in own operations by 20% by 2025 and halve it by 2030",
  //     date: [2025, 2030],
  //     metric: "Food waste (not sold) as % sales",
  //     baseline: "2021/22",
  //   },
  // ];

  if (loading) {
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
