"use client";

import styles from "./CompanyTargets.module.css";
import { FaLeaf, FaCalendarAlt } from "react-icons/fa";
import { IoTargetSharp } from "react-icons/io5";

export default function CompanyTargets() {
  const targets = [
    {
      company: "ALDI",
      target: "Reduce food waste by 20% by 2025, and halve it by 2030",
      date1: "2025",
      date2: "2030",
      metric: "Unknown",
      baseline: "2016/17",
    },
    {
      company: "ASDA",
      target: "Reduce Food Waste by 20% and halve it by 2030",
      date1: "",
      date2: "2030",
      metric: "Food Waste to Energy",
      baseline: "2014/15",
    },
    {
      company: "CO-OP",
      target:
        "Reduce food waste generated in our stores and depots by 50% by 2030 compared to 2015",
      date1: "",
      date2: "2030",
      metric: "Food Waste",
      baseline: "2014/15",
    },
    {
      company: "ICELAND",
      target: "50% reduction of food waste in our own operations by 2030",
      date1: "",
      date2: "2030",
      metric: "Food Waste/Food Handled",
      baseline: "2017/18",
    },
    {
      company: "LIDL",
      target:
        "Reduce food waste by 40% since 2016 (relative to business growth) by 2025 and 50% by 2030",
      date1: "2025",
      date2: "2030",
      metric:
        "Tonnes operational food waste per average store m² in updated year",
      baseline: "2015/16",
    },
    {
      company: "M&S",
      target:
        "Halve UK retail food waste by 2030, maximising donations of surplus",
      date1: "",
      date2: "2030",
      metric: "Food Waste",
      baseline: "2017/18",
    },
    {
      company: "Morrisons",
      target: "50% reduction in operational food waste in stores by 2030",
      date1: "",
      date2: "2030",
      metric: "Food waste/Food Handled",
      baseline: "2016/17",
    },
    {
      company: "Sainsbury",
      target: "Reduce food waste by 50 per cent by 2030",
      date1: "",
      date2: "2030",
      metric: "Food waste to anaerobic digestion",
      baseline: "2019/20",
    },
    {
      company: "Tesco",
      target:
        "85% of unsold food safe for human consumption redistributed by 2025. Reduce food waste by 50% by 2025",
      date1: "2025",
      date2: "",
      metric: "Food Waste/Food Handled",
      baseline: "2016/17",
    },
    {
      company: "Waitrose",
      target: "Reduce operational food waste by 50% against a 2018 baseline",
      date1: "",
      date2: "Unknown",
      metric: "Food Waste/Food Handled",
      baseline: "2017/18",
    },
    {
      company: "OCADO",
      target:
        "Reduce food waste in own operations by 20% by 2025 and halve it by 2030",
      date1: "2025",
      date2: "2030",
      metric: "Food waste (not sold) as % sales",
      baseline: "2021/22",
    },
  ];

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
                      {item.company}
                    </div>
                  </td>
                  <td className={styles.targetCell}>{item.target}</td>
                  <td className={styles.dateCell}>
                    <div className={styles.dates}>
                      {item.date1 && item.date2 && item.date2 !== "Unknown" && (
                        <span
                          className={`${styles.date} ${styles.previousDate}`}
                        >
                          <FaCalendarAlt /> {item.date1}
                          <span className={styles.dateLabel}>Previous</span>
                        </span>
                      )}
                      {item.date1 &&
                        (!item.date2 || item.date2 === "Unknown") && (
                          <span
                            className={`${styles.date} ${styles.latestDate}`}
                          >
                            <FaCalendarAlt /> {item.date1}
                            <span className={styles.dateLabel}>Target</span>
                          </span>
                        )}
                      {item.date2 && item.date2 !== "Unknown" && (
                        <span className={`${styles.date} ${styles.latestDate}`}>
                          <FaCalendarAlt /> {item.date2}
                          <span className={styles.dateLabel}>Latest</span>
                        </span>
                      )}
                    </div>
                  </td>
                  <td className={styles.metricCell}>{item.metric}</td>
                  <td className={styles.baselineCell}>
                    <span className={styles.baseline}>{item.baseline}</span>
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
