"use client";

import { useState } from "react";
import styles from "./Aliance.module.css";
import { FaHandshake, FaSearch } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Aliance() {
  const [searchTerm, setSearchTerm] = useState("");
  const euAlliances = [
    {
      name: "AECOC (Spanish Association of Manufacturers and Distributors)",
      companies: ["Mercadona"],
    },
    {
      name: "Alwin",
      companies: ["Norgesgruppen"],
    },
    {
      name: "Banco Alimentare",
      companies: ["Norgesgruppen"],
    },
    {
      name: "British Retail Consortium",
      companies: [
        "ALDI",
        "ASDA",
        "CO-OP",
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
      name: "Caritas",
      companies: ["Aldi Nord", "Carrefour", "DIA", "LIDL Schwarz Group"],
    },
    {
      name: "Champions 12.3",
      companies: ["Tesco"],
    },
    {
      name: "Company Shop",
      companies: ["Morrisons", "Tesco"],
    },
    {
      name: "Consumer Goods Forum",
      companies: ["Sainsbury", "Tesco", "Waitrose"],
    },
    {
      name: "COP26",
      companies: ["CO-OP", "M&S", "Sainsbury", "Tesco"],
    },
    {
      name: "Council on Sust. Business",
      companies: ["CO-OP"],
    },
    {
      name: "Courtauld",
      companies: [
        "ALDI",
        "ASDA",
        "CO-OP",
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
      name: "Hubbub",
      companies: ["ASDA", "CO-OP", "Lidl", "M&S", "Tesco", "Waitrose"],
    },
    {
      name: "Institute of Grocery Distribution",
      companies: ["Morrisons", "Sainsbury"],
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
      name: "UN Climate Change Conference",
      companies: ["Sainsbury"],
    },
    {
      name: "Via Wings",
      companies: ["LIDL Ireland"],
    },
    {
      name: "WRAP",
      companies: [
        "ALDI",
        "ASDA",
        "CO-OP",
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
      name: "WWF",
      companies: ["Carrefour", "Delhaize", "Kesko", "Les Mousquetaires"],
    },
    {
      name: "'stop waste locally' (Stop Spild Lokalt)",
      companies: ["Aldi Nord"],
    },
    {
      name: "wwf",
      companies: ["CO-OP", "M&S", "Tesco", "Waitrose"],
    },
  ];

  // Filter alliances based on search term
  const filteredAlliances = euAlliances.filter(
    (alliance) =>
      alliance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alliance.companies.some((company) =>
        company.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className={styles.alliances}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Partnerships</span>
          <h2 className={styles.title}>
            EU <span className={styles.highlight}>Alliances & Networks</span>
          </h2>
          <p className={styles.subtitle}>
            Pan-European collaborative networks and partnerships driving
            sustainability across the continent
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h3 className={styles.sectionTitle}>European Alliances</h3>
            <div className={styles.totalCount}>
              {filteredAlliances.length} of {euAlliances.length} Organizations
            </div>
          </div>

          {/* Search Filter */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search by alliance name or company..."
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
          {filteredAlliances.length > 0 ? (
            <div className={styles.alliancesList}>
              {filteredAlliances.map((alliance, index) => (
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
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>
                No alliances found matching "{searchTerm}"
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
