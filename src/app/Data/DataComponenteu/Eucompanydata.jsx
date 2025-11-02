"use client";

import React from "react";
import styles from "./Eucompanydata.module.css";
import { FaLeaf, FaCalendarAlt, FaGlobeEurope } from "react-icons/fa";

export default function EuCompanyData() {
  const eudata = [
    {
      companyName: "Aldi Nord (North)",
      Commitment: [
        "Integrate 100% of all stores in partnership to reduce FW by the end of 2021",
        "50% reduction by 2030",
        "Offer products from FW by end of 2021",
      ],
      targetDate: [2021, 2030],
      TargetMetric: [
        "Number of stores donating food - number of stores donating as a proportion of the total number of stores (in %)",
      ],
      Standardised: "Number of stores donating food",
      Baseline: "Not mentioned",
    },
    {
      companyName: "Aldi Sud (South)",
      Commitment: [
        " Reduce FW by 30% by 2025 ",
        "Reduce FW by 50% by 2030",
        "100% branches to donate food",
        "90% FW diverted from landfill or incineration by 2030",
      ],
      targetDate: [2025, 2030],
      TargetMetric: [
        "FW intensity as a % of all food handled (the percentage of food handled that ends up as waste (tonnes of food waste/tonnes of food product  sold + tonnes of food waste + tonnes of food redistributed)FW: food surplus per total food sold",
      ],
      Standardised: "Food Waste/Food Handled",
      Baseline: "2017/2018",
    },
    {
      companyName: "Carrefour",
      Commitment: ["50% reduction in retail FW by 2025 "],
      targetDate: [],
      TargetMetric: ["FW in kg per sq.m "],
      Standardised: "Food Waste in kg per sq.m",
      Baseline: "2016/2017",
    },
    {
      companyName: "Colruyt",
      Commitment: [
        "40% of remaining consumable but unsold food to be destined for human or animal consumption by 2025",
      ],
      targetDate: [2025],
      TargetMetric: [
        "Tonnage (or percentage) of unsold food distributed for human and animal consumption",
      ],
      Standardised:
        "Tonnage (or percentage) of unsold food distributed for human and animal consumption",
      Baseline: "",
    },
    {
      companyName: "Delhaize",
      Commitment: [
        "Reduce FW by 20% by 2020",
        " Reduce FW by 32% by 2025",
        "Reduce FW by 50% by 2030",
      ],
      targetDate: [],
      TargetMetric: ["Tonnes of FW per 1 million Euro of food sales"],
      Standardised: "Tonnes of FW per 1 million Euro of food sales",
      Baseline: "2016/17",
    },
    {
      companyName: "DIA",
      Commitment: [
        "Reduce FW by 40% over three years (Spain and Portugal only)",
      ],
      targetDate: [],
      TargetMetric: ["FW sent to landfill", "Food Waste/Food Handled"],
      Standardised: "Sent to landfill",
      Baseline: "2020/21",
    },
    {
      companyName: "Kesko",
      Commitment: [
        "Reduce FW by 10% by 2020",
        "Reduce FW by 13% by 2021",
        "Reduce FW by 25% by 2026",
        "Reduce FW by 50% by 2030",
      ],
      targetDate: [2020, 2021, 2026, 2030],
      TargetMetric: [
        "FW/food sold (kg) from base year 2016 (2019-2021 period)",
      ],
      Standardised: "Food Waste/Food Sold",
      Baseline: "2016/17",
    },
    {
      companyName: "LIDL (Ireland)",
      Commitment: ["Redistribute over 5 million meals by FY 2025"],
      targetDate: [2025],
      TargetMetric: [
        "Total Food Waste Donated (Lidl own metric; total volume of food waste donated from store)",
      ],
      Standardised: "Food Waste donated",
      Baseline: "2016/17",
    },
    {
      companyName: "LIDL Schwarz Group",
      Commitment: ["Reduce FW 50% by 2030"],
      targetDate: [2030],
      TargetMetric: ["Under development"],
      Standardised: "Under Development  ",
      Baseline: "2018/19",
    },
    {
      companyName: "Mercadona",
      Commitment: ["Reduce FW below 1% by weight"],
      targetDate: [],
      TargetMetric: ["Food Waste/Food Handled"],
      Standardised: "Food Waste/Food Handled",
      Baseline: "N/A",
    },
    {
      companyName: "Les Mousquetaires",
      Commitment: ["Zero FW by 2025"],
      targetDate: [2025],
      TargetMetric: ["Food Waste"],
      Standardised: "Food Waste",
      Baseline: "N/A",
    },
    {
      companyName: "Norgesgruppen",
      Commitment: [
        "Reduce FW by 25% by 2020",
        "Reduce FW by 50% by 2025",
        "Reduce FW by 55% by 2025 ",
      ],
      targetDate: [2020, 2025],
      TargetMetric: ["Change in FW (in value)/Sales"],
      Standardised: "Change in FW (in value)/Sales",
      Baseline: "2015/16",
    },
  ];

  return (
    <section className={styles.targets}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <FaGlobeEurope className={styles.badgeIcon} />
            EU Company Commitments
          </span>
          <h2 className={styles.title}>
            European <span className={styles.highlight}>Sustainability</span>{" "}
            Targets
          </h2>
          <p className={styles.subtitle}>
            Comprehensive overview of major European retailers' sustainability
            commitments and environmental targets
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Commitments</th>
                <th>Target Dates</th>
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
                  <td className={styles.metricCell}>{company.Standardised}</td>
                  <td className={styles.baselineCell}>
                    <span className={styles.baseline}>{company.Baseline}</span>
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
