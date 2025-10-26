"use client";

import styles from "./Alliances.module.css";
import { FaHandshake, FaHeart } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Alliances() {
  const ukAlliances = [
    {
      name: "British Retail Consortium",
      companies: [
        "Aldi",
        "Asda",
        "Co-op",
        "Iceland",
        "Lidl",
        "M&S",
        "Morrisons",
        "Sainsbury",
        "Tesco",
        "Waitrose",
      ],
    },
    {
      name: "Champions 12.3",
      companies: ["Tesco"],
    },
    {
      name: "Consumer Goods Forum",
      companies: ["Tesco", "Sainsbury"],
    },
    {
      name: "COP26",
      companies: ["Tesco", "Sainsbury", "M&S", "Co-op"],
    },
    {
      name: "Courtauld",
      companies: [
        "Aldi",
        "Asda",
        "Co-op",
        "Lidl",
        "M&S",
        "Morrisons",
        "Sainsbury",
        "Tesco",
        "Waitrose",
      ],
    },
    {
      name: "WRAP",
      companies: [
        "Aldi",
        "Asda",
        "Co-op",
        "Lidl",
        "M&S",
        "Morrisons",
        "Sainsbury",
        "Tesco",
        "Waitrose",
      ],
    },
    {
      name: "Too Good to Go",
      companies: ["Aldi", "Co-op", "Morrisons", "Sainsbury", "Waitrose"],
    },
  ];

  const charities = [
    {
      name: "FareShare",
      companies: ["Aldi", "Asda", "Co-op", "M&S", "Morrisons", "Sainsbury"],
    },
    {
      name: "Hubbub",
      companies: ["Asda", "Co-op", "M&S", "Morrisons", "Sainsbury", "Waitrose"],
    },
    {
      name: "The Trussell Trust",
      companies: ["Asda", "Tesco", "Waitrose"],
    },
    {
      name: "OLIO",
      companies: ["Asda", "Morrisons", "Tesco", "Waitrose"],
    },
    {
      name: "Neighbourly",
      companies: ["Aldi", "Asda", "Co-op", "Waitrose"],
    },
    {
      name: "WWF",
      companies: ["Co-op", "M&S", "Sainsbury", "Tesco"],
    },
  ];

  return (
    <section className={styles.alliances}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Partnerships</span>
          <h2 className={styles.title}>
            UK <span className={styles.highlight}>Alliances & Charities</span>
          </h2>
          <p className={styles.subtitle}>
            Collaborative networks and charitable partnerships driving food
            waste reduction
          </p>
        </div>

        <div className={styles.sectionsGrid}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FaHandshake className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>UK Alliances</h3>
            </div>

            <div className={styles.alliancesList}>
              {ukAlliances.map((alliance, index) => (
                <div key={index} className={styles.allianceCard}>
                  <h4 className={styles.allianceName}>{alliance.name}</h4>
                  <div className={styles.companiesList}>
                    {alliance.companies.map((company, idx) => (
                      <span key={idx} className={styles.companyTag}>
                        <IoCheckmarkCircle className={styles.checkIcon} />
                        {company}
                      </span>
                    ))}
                  </div>
                  <div className={styles.companyCount}>
                    {alliance.companies.length}{" "}
                    {alliance.companies.length === 1 ? "Company" : "Companies"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FaHeart className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Charity Partners</h3>
            </div>

            <div className={styles.alliancesList}>
              {charities.map((charity, index) => (
                <div key={index} className={styles.allianceCard}>
                  <h4 className={styles.allianceName}>{charity.name}</h4>
                  <div className={styles.companiesList}>
                    {charity.companies.map((company, idx) => (
                      <span key={idx} className={styles.companyTag}>
                        <IoCheckmarkCircle className={styles.checkIcon} />
                        {company}
                      </span>
                    ))}
                  </div>
                  <div className={styles.companyCount}>
                    {charity.companies.length}{" "}
                    {charity.companies.length === 1 ? "Partner" : "Partners"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
