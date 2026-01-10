"use client";

import React from "react";
import { useEffect } from "react";
import styles from "./Eucompanydata.module.css";
import { FaLeaf, FaCalendarAlt, FaGlobeEurope } from "react-icons/fa";

export default function EuCompanyData() {
  const [eudata, setEudata] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/EU/eucompany");
        const data = await response.json();
        setEudata(data.data);
      } catch (error) {
        console.error("Error fetching EU company data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.targets}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <FaGlobeEurope className={styles.badgeIcon} />
            Company Targets
          </span>
          <h2 className={styles.title}>
            EU Retailers'{" "}
            <span className={styles.highlight}>
              Food Waste Reduction Targets
            </span>{" "}
          </h2>
          <p className={styles.subtitle}>
            Comprehensive overview of major EU supermarkets' commitments to
            reducing food waste
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Commitments</th>
                <th>Target Dates</th>
                <th>Target Metric</th>
                <th>Standardised Metric</th>
                <th>Baseline</th>
              </tr>
            </thead>
            <tbody>
              {eudata.map((company, index) => (
                <tr key={index} className={styles.row}>
                  <td className={styles.companyCell}>
                    <div className={styles.companyName}>
                      <FaLeaf className={styles.companyIcon} />
                      {company.companyName}
                    </div>
                  </td>
                  <td className={styles.commitmentsCell}>
                    <ul className={styles.commitmentsList}>
                      {company.Commitment.map((commitment, idx) => (
                        <li key={idx} className={styles.commitmentItem}>
                          {commitment}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className={styles.dateCell}>
                    <div className={styles.milestonesWrapper}>
                      {company.targetDate && company.targetDate.length > 0 ? (
                        <>
                          <div className={styles.milestoneContainer}>
                            {company.targetDate.map((year, idx) => (
                              <React.Fragment key={idx}>
                                <span
                                  className={`${styles.milestone} ${
                                    company.targetDate.length === 1
                                      ? styles.milestoneSingle
                                      : idx === 0
                                      ? styles.milestone1
                                      : idx === company.targetDate.length - 1
                                      ? styles.milestone2
                                      : styles.milestoneIntermediate
                                  }`}
                                >
                                  {company.targetDate.length === 1 ? (
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
                                {idx < company.targetDate.length - 1 && (
                                  <div className={styles.connector}></div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className={styles.milestoneLabel}>
                            {company.targetDate.length === 1
                              ? "Single Target"
                              : `${company.targetDate.length} Milestones`}
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
                    <ul className={styles.commitmentsList}>
                      {company.TargetMetric.map((metric, idx) => (
                        <li key={idx} className={styles.commitmentItem}>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className={styles.metricCell}>
                    <ul className={styles.commitmentsList}>
                      {company.Standardised.map((metric, idx) => (
                        <li key={idx} className={styles.commitmentItem}>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className={styles.baselineCell}>
                    <span className={styles.baseline}>
                      {company.fromBaseline === 0 && company.toBaseline === 0
                        ? "N/A"
                        : company.fromBaseline !== null &&
                          company.toBaseline !== null
                        ? `${company.fromBaseline}/${company.toBaseline}`
                        : company.fromBaseline !== null ||
                          company.toBaseline !== null
                        ? company.fromBaseline !== null
                          ? company.fromBaseline
                          : company.toBaseline
                        : "N/A"}
                    </span>
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
