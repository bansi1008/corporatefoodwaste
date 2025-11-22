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

  // const eudata = [
  //   {
  //     companyName: "Aldi Nord (North)",
  //     Commitment: [
  //       "Integrate 100% of all stores in partnership to reduce FW by the end of 2021",
  //       "50% reduction by 2030",
  //       "Offer products from FW by end of 2021",
  //     ],
  //     targetDate: [2021, 2030],
  //     TargetMetric: [
  //       "Number of stores donating food - number of stores donating as a proportion of the total number of stores (in %)",
  //     ],
  //     Standardised: ["Number of stores donating food", "hidvkdovodm dovdovj "],
  //     fromBaseline: null,
  //     toBaseline: null,
  //   },
  //   {
  //     companyName: "Aldi Sud (South)",
  //     Commitment: [
  //       " Reduce FW by 30% by 2025 ",
  //       "Reduce FW by 50% by 2030",
  //       "100% branches to donate food",
  //       "90% FW diverted from landfill or incineration by 2030",
  //     ],
  //     targetDate: [2025, 2030],
  //     TargetMetric: [
  //       "FW intensity as a % of all food handled (the percentage of food handled that ends up as waste (tonnes of food waste/tonnes of food product  sold + tonnes of food waste + tonnes of food redistributed)FW: food surplus per total food sold",
  //     ],
  //     Standardised: ["Food Waste/Food Handled"],
  //     fromBaseline: 2017,
  //     toBaseline: 2018,
  //   },
  //   {
  //     companyName: "Carrefour",
  //     Commitment: ["50% reduction in retail FW by 2025 "],
  //     targetDate: [2025],
  //     TargetMetric: ["FW in kg per sq.m "],
  //     Standardised: ["Food Waste in kg per sq.m"],
  //     fromBaseline: 2016,
  //     toBaseline: 2017,
  //   },
  //   {
  //     companyName: "Colruyt",
  //     Commitment: [
  //       "40% of remaining consumable but unsold food to be destined for human or animal consumption by 2025",
  //     ],
  //     targetDate: [2025],
  //     TargetMetric: [
  //       "Tonnage (or percentage) of TargetMetric food distributed for human and animal consumption",
  //     ],
  //     Standardised: [
  //       "Tonnage (or percentage) of unsold food distributed for human and animal consumption",
  //     ],
  //     fromBaseline: null,
  //     toBaseline: null,
  //   },
  //   {
  //     companyName: "Delhaize",
  //     Commitment: [
  //       "Reduce FW by 20% by 2020",
  //       " Reduce FW by 32% by 2025",
  //       "Reduce FW by 50% by 2030",
  //     ],
  //     targetDate: [2020, 2025, 2030],
  //     TargetMetric: ["Tonnes of FW per 1 million Euro of food sales"],
  //     Standardised: ["Tonnes of FW per 1 million Euro of food sales"],
  //     fromBaseline: 2016,
  //     toBaseline: 2017,
  //   },
  //   {
  //     companyName: "DIA",
  //     Commitment: [
  //       "Reduce FW by 40% over three years (Spain and Portugal only)",
  //     ],
  //     targetDate: [],
  //     TargetMetric: ["FW sent to landfill", "Food Waste/Food Handled"],
  //     Standardised: ["Sent to landfill", "Food Waste/Food Handled"],
  //     fromBaseline: 2020,
  //     toBaseline: 2021,
  //   },
  //   {
  //     companyName: "Kesko",
  //     Commitment: [
  //       "Reduce FW by 10% by 2020",
  //       "Reduce FW by 13% by 2021",
  //       "Reduce FW by 25% by 2026",
  //       "Reduce FW by 50% by 2030",
  //     ],
  //     targetDate: [2020, 2021, 2026, 2030],
  //     TargetMetric: [
  //       "FW/food sold (kg) from base year 2016 (2019-2021 period)",
  //     ],
  //     Standardised: ["Food Waste/Food Sold"],
  //     fromBaseline: 2016,
  //     toBaseline: 2017,
  //   },
  //   {
  //     companyName: "LIDL (Ireland)",
  //     Commitment: ["Redistribute over 5 million meals by FY 2025"],
  //     targetDate: [2025],
  //     TargetMetric: [
  //       "Total Food Waste Donated (Lidl own metric; total volume of food waste donated from store)",
  //     ],
  //     Standardised: ["Food Waste donated"],
  //     fromBaseline: 2016,
  //     toBaseline: 2017,
  //   },
  //   {
  //     companyName: "LIDL Schwarz Group",
  //     Commitment: ["Reduce FW 50% by 2030"],
  //     targetDate: [2030],
  //     TargetMetric: ["Under development"],
  //     Standardised: ["Under Development"],
  //     fromBaseline: 2018,
  //     toBaseline: 2019,
  //   },
  //   {
  //     companyName: "Mercadona",
  //     Commitment: ["Reduce FW below 1% by weight"],
  //     targetDate: [],
  //     TargetMetric: ["Food Waste/Food Handled"],
  //     Standardised: ["Food Waste/Food Handled"],
  //     fromBaseline: null,
  //     toBaseline: null,
  //   },
  //   {
  //     companyName: "Les Mousquetaires",
  //     Commitment: ["Zero FW by 2025"],
  //     targetDate: [2025],
  //     TargetMetric: ["Food Waste"],
  //     Standardised: ["Food Waste"],
  //     fromBaseline: null,
  //     toBaseline: null,
  //   },
  //   {
  //     companyName: "Norgesgruppen",
  //     Commitment: [
  //       "Reduce FW by 25% by 2020",
  //       "Reduce FW by 50% by 2025",
  //       "Reduce FW by 55% by 2025 ",
  //     ],
  //     targetDate: [2020, 2025],
  //     TargetMetric: ["Change in FW (in value)/Sales"],
  //     Standardised: ["Change in FW (in value)/Sales"],
  //     fromBaseline: 2015,
  //     toBaseline: 2016,
  //   },
  // ];

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
            Comprehensive overview of major European Food retailers'
            sustainability commitments and environmental targets
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
