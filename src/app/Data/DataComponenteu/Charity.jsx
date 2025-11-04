"use client";

import { useState } from "react";
import styles from "./Charity.module.css";
import { FaHeart, FaSearch } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Charity() {
  const [searchTerm, setSearchTerm] = useState("");
  const charityData = [
    {
      name: "Alwin",
      companies: ["Norgesgruppen"],
    },
    {
      name: "Banco Alimentare",
      companies: ["Norgesgruppen"],
    },
    {
      name: "Boni enVie",
      companies: ["Colruyt"],
    },
    {
      name: "Caritas",
      companies: ["Aldi Nord", "Carrefour", "DIA", "LIDL Schwarz Group"],
    },
    {
      name: "Company Shop",
      companies: ["Morrisons", "Tesco"],
    },
    {
      name: "Emmaüs",
      companies: ["Les Mousquetaires"],
    },
    {
      name: "Expliceat",
      companies: ["Carrefour"],
    },
    {
      name: "Fareshare",
      companies: [
        "ASDA",
        "CO-OP",
        "Morrisons",
        "Sainsbury",
        "Tesco",
        "Waitrose",
      ],
    },
    {
      name: "Flashfood",
      companies: ["Delhaize"],
    },
    {
      name: "Food Cloud App",
      companies: ["ALDI", "LIDL Ireland", "Lidl", "Tesco", "Waitrose"],
    },
    {
      name: "Food for Soul",
      companies: ["Carrefour"],
    },
    {
      name: "His Church",
      companies: [
        "ALDI",
        "ASDA",
        "Iceland",
        "Lidl",
        "Morrisons",
        "Sainsbury",
        "Waitrose",
      ],
    },
    {
      name: "Let's give them a chance",
      companies: ["Les Mousquetaires"],
    },
    {
      name: "Local NGOs (Food banks)",
      companies: [
        "Aldi Sud",
        "Carrefour",
        "Colruyt",
        "DIA",
        "Delhaize",
        "Kesko",
        "LIDL Ireland",
        "LIDL Schwarz Group",
        "Les Mousquetaires",
        "Norgesgruppen",
      ],
    },
    {
      name: "Love Food Hate Waste",
      companies: ["ALDI", "CO-OP", "Tesco"],
    },
    {
      name: "Matsentralen",
      companies: ["Norgesgruppen"],
    },
    {
      name: "Neighbourly",
      companies: ["ALDI", "Lidl", "M&S", "Sainsbury"],
    },
    {
      name: "OLIO",
      companies: ["ASDA", "Iceland", "Sainsbury", "Tesco"],
    },
    {
      name: "Red Cross",
      companies: ["Aldi Sud", "Carrefour", "Delhaize", "Les Mousquetaires"],
    },
    {
      name: "Refood",
      companies: ["Aldi Nord"],
    },
    {
      name: "ResQ Club",
      companies: ["Kesko"],
    },
    {
      name: "Restos du Coeur",
      companies: ["Les Mousquetaires"],
    },
    {
      name: "Ringgaard association (Foreningen Ringgaard)",
      companies: ["Aldi Nord"],
    },
    {
      name: "Shrub Coop",
      companies: ["Iceland"],
    },
    {
      name: "Tafel",
      companies: ["Aldi Nord", "LIDL Schwarz Group"],
    },
    {
      name: "The Bread and Butter Thing",
      companies: ["ASDA", "Iceland", "Lidl", "Morrisons"],
    },
    {
      name: "The Trussell Trust",
      companies: ["Morrisons", "Tesco", "Waitrose"],
    },
    {
      name: "Throw No More",
      companies: ["Norgesgruppen"],
    },
    {
      name: "Too Good to go",
      companies: ["ALDI", "ASDA", "M&S", "Morrisons", "Waitrose"],
    },
    {
      name: "Via Wings",
      companies: ["LIDL Ireland"],
    },
    {
      name: "World Vision",
      companies: ["DIA"],
    },
    {
      name: "'stop waste locally' (Stop Spild Lokalt)",
      companies: ["Aldi Nord"],
    },
  ];

  // Filter charities based on search term
  const filteredCharities = charityData.filter(
    (charity) =>
      charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      charity.companies.some((company) =>
        company.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className={styles.charities}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Charitable Partnerships</span>
          <h2 className={styles.title}>
            EU <span className={styles.highlight}>Charity Partners</span>
          </h2>
          <p className={styles.subtitle}>
            Key Non-profit organizations and charities working with European
            retailers to combat food waste
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaHeart className={styles.sectionIcon} />
            <h3 className={styles.sectionTitle}>Charity Organizations</h3>
            <div className={styles.totalCount}>
              {filteredCharities.length} of {charityData.length} Charities
            </div>
          </div>

          {/* Search Filter */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search by charity name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results or Empty State */}
          {filteredCharities.length > 0 ? (
            <div className={styles.charitiesList}>
              {filteredCharities.map((charity, index) => (
                <div key={index} className={styles.charityCard}>
                  <h4 className={styles.charityName}>{charity.name}</h4>
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
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>
                No charities found matching "{searchTerm}"
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
