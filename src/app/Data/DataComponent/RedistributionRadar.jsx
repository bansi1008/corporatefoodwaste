"use client";

import { useState } from "react";
import styles from "./RedistributionRadar.module.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

export default function RedistributionRadar() {
  const redistributionData = [
    {
      year: "2016/17",
      Tesco: 0,
      Sainsbury: 0,
      Asda: 0,
      Morrisons: 0,
      Aldi: 1.1,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2017/18",
      Tesco: 0,
      Sainsbury: 73,
      Asda: 0,
      Morrisons: 0,
      Aldi: 1.6,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2018/19",
      Tesco: 0,
      Sainsbury: 87,
      Asda: 0,
      Morrisons: 0,
      Aldi: 3.1,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2019/20",
      Tesco: 77,
      Sainsbury: 92,
      Asda: 0,
      Morrisons: 0,
      Aldi: 0,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2020/21",
      Tesco: 82,
      Sainsbury: null,
      Asda: 0,
      Morrisons: 0,
      Aldi: 0,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2021/22",
      Tesco: 83,
      Sainsbury: 119,
      Asda: 0,
      Morrisons: 0,
      Aldi: 0,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
    {
      year: "2022/23",
      Tesco: 83,
      Sainsbury: 119,
      Asda: 0,
      Morrisons: 0,
      Aldi: 0,
      MS: 0,
      Lidl: 0,
      Waitrose: 0,
      Iceland: 0,
      Coop: 0,
    },
  ];

  const companies = [
    { name: "Tesco", color: "#3b82f6", bgColor: "rgba(59, 130, 246, 0.1)" },
    { name: "Sainsbury", color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)" },
    { name: "Asda", color: "#10b981", bgColor: "rgba(16, 185, 129, 0.1)" },
    { name: "Morrisons", color: "#8b5cf6", bgColor: "rgba(139, 92, 246, 0.1)" },
    { name: "Aldi", color: "#ef4444", bgColor: "rgba(239, 68, 68, 0.1)" },
    { name: "MS", color: "#ec4899", bgColor: "rgba(236, 72, 153, 0.1)" },
    { name: "Lidl", color: "#06b6d4", bgColor: "rgba(6, 182, 212, 0.1)" },
    { name: "Waitrose", color: "#84cc16", bgColor: "rgba(132, 204, 22, 0.1)" },
    { name: "Iceland", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.1)" },
    { name: "Coop", color: "#6366f1", bgColor: "rgba(99, 102, 241, 0.1)" },
  ];

  const [selectedCompanies, setSelectedCompanies] = useState([
    "Tesco",
    "Sainsbury",
    "Aldi",
  ]);

  const toggleCompany = (companyName) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyName)
        ? prev.filter((c) => c !== companyName)
        : [...prev, companyName]
    );
  };

  // Transform data for radar chart (data already in numeric format)
  const transformedData = redistributionData;

  // Get company info
  const getCompanyInfo = (companyName) => {
    return companies.find((c) => c.name === companyName);
  };

  // Select/Deselect all
  const selectAll = () => {
    setSelectedCompanies(companies.map((c) => c.name));
  };

  const deselectAll = () => {
    setSelectedCompanies([]);
  };

  return (
    <section className={styles.radarSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <IoStatsChart /> Interactive Visualization
          </span>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Redistribution Performance</span>
            <br />
            Spider Chart Analysis
          </h2>
          <p className={styles.subtitle}>
            Interactive radar chart showing redistribution percentages across
            years. Select companies to compare their performance trends.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Company Selection Panel */}
          <div className={styles.selectionPanel}>
            <div className={styles.panelHeader}>
              <h3 className={styles.panelTitle}>Select Companies</h3>
              <div className={styles.bulkActions}>
                <button onClick={selectAll} className={styles.bulkBtn}>
                  Select All
                </button>
                <button onClick={deselectAll} className={styles.bulkBtn}>
                  Clear All
                </button>
              </div>
            </div>

            <div className={styles.companyList}>
              {companies.map((company) => {
                const isSelected = selectedCompanies.includes(company.name);
                return (
                  <div
                    key={company.name}
                    className={`${styles.companyItem} ${
                      isSelected ? styles.selected : ""
                    }`}
                    onClick={() => toggleCompany(company.name)}
                    style={{
                      backgroundColor: isSelected
                        ? company.bgColor
                        : "transparent",
                      borderColor: isSelected ? company.color : "#e5e7eb",
                    }}
                  >
                    <div className={styles.checkboxWrapper}>
                      {isSelected ? (
                        <FaCheckSquare
                          className={styles.checkbox}
                          style={{ color: company.color }}
                        />
                      ) : (
                        <FaRegSquare className={styles.checkboxEmpty} />
                      )}
                    </div>
                    <div className={styles.companyInfo}>
                      <span className={styles.companyName}>{company.name}</span>
                      <div
                        className={styles.colorIndicator}
                        style={{ backgroundColor: company.color }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.infoBox}>
              <h4 className={styles.infoTitle}>How to use:</h4>
              <ul className={styles.infoList}>
                <li>Click company names to toggle their visibility</li>
                <li>Each axis represents a year (2016/17 - 2021/22)</li>
                <li>Values range from 0% to 120%</li>
                <li>0 value means no data available</li>
                <li>Hover over the chart for detailed values</li>
              </ul>
            </div>
          </div>

          {/* Radar Chart */}
          <div className={styles.chartWrapper}>
            {selectedCompanies.length > 0 ? (
              <>
                <div className={styles.chartHeader}>
                  <h3 className={styles.chartTitle}>
                    Comparing {selectedCompanies.length} Compan
                    {selectedCompanies.length === 1 ? "y" : "ies"}
                  </h3>
                  <div className={styles.selectedBadges}>
                    {selectedCompanies.map((companyName) => {
                      const company = getCompanyInfo(companyName);
                      return (
                        <span
                          key={companyName}
                          className={styles.selectedBadge}
                          style={{
                            backgroundColor: company.bgColor,
                            color: company.color,
                            borderColor: company.color,
                          }}
                        >
                          {companyName}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={500}>
                  <RadarChart data={transformedData}>
                    <PolarGrid stroke="#e5e7eb" strokeWidth={1.5} />
                    <PolarAngleAxis
                      dataKey="year"
                      tick={{ fill: "#374151", fontSize: 14, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 120]}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                        color: "#ffffff",
                        padding: "12px 16px",
                      }}
                      formatter={(value, name) => {
                        if (value === null || value === undefined)
                          return ["N/A", name];
                        if (value === 0) return ["No Data", name];
                        return [`${value.toFixed(2)}%`, name];
                      }}
                    />
                    {selectedCompanies.map((companyName) => {
                      const company = getCompanyInfo(companyName);
                      return (
                        <Radar
                          key={companyName}
                          name={companyName}
                          dataKey={companyName}
                          stroke={company.color}
                          fill={company.color}
                          fillOpacity={0.25}
                          strokeWidth={3}
                          dot={{
                            r: 5,
                            fill: company.color,
                            strokeWidth: 2,
                            stroke: "#fff",
                          }}
                          activeDot={{
                            r: 7,
                            fill: company.color,
                            strokeWidth: 3,
                            stroke: "#fff",
                          }}
                        />
                      );
                    })}
                    <Legend
                      wrapperStyle={{ paddingTop: "20px" }}
                      iconType="circle"
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </>
            ) : (
              <div className={styles.emptyState}>
                <IoStatsChart className={styles.emptyIcon} />
                <h3 className={styles.emptyTitle}>No Companies Selected</h3>
                <p className={styles.emptyText}>
                  Please select at least one company from the left panel to view
                  the radar chart
                </p>
                <button onClick={selectAll} className={styles.emptyBtn}>
                  Select All Companies
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
