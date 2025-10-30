"use client";

import styles from "./DocumentsChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function DocumentsChart() {
  const documentsData = [
    {
      year: "2016/17",
      annualReport: 3,
      sustainability: 3,
      other: 2,
      total: 8,
    },
    {
      year: "2017/18",
      annualReport: 4,
      sustainability: 2,
      other: 2,
      total: 8,
    },
    {
      year: "2018/19",
      annualReport: 4,
      sustainability: 2,
      other: 2,
      total: 8,
    },

    {
      year: "2019/20",
      annualReport: 6,
      sustainability: 4,
      other: 3,
      total: 13,
    },
    {
      year: "2020/21",
      annualReport: 4,
      sustainability: 6,
      other: 4,
      total: 14,
    },
    {
      year: "2021/22",
      annualReport: 6,
      sustainability: 5,
      other: 5,
      total: 16,
    },
    {
      year: "2022/23",
      annualReport: 6,
      sustainability: 5,
      other: 5,
      total: 16,
    },
  ];

  return (
    <section className={styles.charts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Documentation Trends</span>
          <h2 className={styles.title}>
            UK <span className={styles.highlight}>Documents by Year</span>
          </h2>
          <p className={styles.subtitle}>
            Evolution of food waste reporting documentation across UK retailers
          </p>
        </div>

        <div className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>
              Documents by Type (Stacked Bar Chart)
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={documentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f0e0eff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="annualReport"
                  stackId="a"
                  fill="#22c55e"
                  name="Annual Report"
                />
                <Bar
                  dataKey="sustainability"
                  stackId="a"
                  fill="#3b82f6"
                  name="Sustainability Reports"
                />
                <Bar dataKey="other" stackId="a" fill="#f59e0b" name="Other" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>
              Total Documents Trend (Line Chart)
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={documentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#121212ff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#22c55e"
                  strokeWidth={3}
                  name="Total Documents"
                  dot={{ r: 5, fill: "#22c55e" }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div> */}
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>75</div>
            <div className={styles.statLabel}>Total Documents</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>30</div>
            <div className={styles.statLabel}>Annual Reports</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>24</div>
            <div className={styles.statLabel}>Sustainability Reports</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>21</div>
            <div className={styles.statLabel}>Other Documents</div>
          </div>
        </div>
      </div>
    </section>
  );
}
