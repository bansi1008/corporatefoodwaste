"use client";
import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import Picture1 from "../Images/Picture1.jpg";
import Picture2 from "../Images/photo.png";
import Picture3 from "../Images/Josie.png";
import Picture4 from "../Images/Dina.png";
import Picture5 from "../Images/Roza.png";
import Picture6 from "../Images/Picture6.png";
import Navbar from "../ComponentHome/Navbar";

export default function AboutPage() {
  const teamBios = [
    {
      name: "Professor Lisa Jack",
      bio: "She began her career as an auditor before moving into teaching and research. Lisa specialises in management control and accounting for the food industry and in forensic accounting. She is the author of 'Benchmarking for Food and Farming: Creating Sustainable Change'.",
      university: "University of Portsmouth",
      image: Picture1,
    },
    {
      name: "Professor Josie McLaren",
      bio: "She explores the intersection of accounting and finance with a particular focus on accountability, valuation, benchmarking, and sustainability. She has led internally and externally funded projects, including work on the Business Benchmark on Farm Animal Welfare.",
      university: "Newcastle University",
      image: Picture3,
    },
    {
      name: "Dr Roza Sagitova",
      bio: "Her research focuses on corporate social responsibility reporting, sustainability reporting, environmental disclosure practices, risk disclosure, and accounting history.",
      university: "University of Portsmouth",
      image: Picture5,
    },
    {
      name: "Dr Yutong (Raina) Wu",
      bio: "Her research interests are in operational research for transport and logistics systems, the application of Behaviour Finance models, Green Finance, and sustainability and accountability in the food sector.",
      university: "",
      image: Picture2,
    },
    {
      name: "Dina Eltabey",
      bio: "She is a Strategy Consultant and Teaching Fellow. Her research focuses on corporate responsibility and institutional change. Drawing on over twenty years of experience in global organizations, she integrates academic inquiry with real-world strategic practice.",
      university: "University of Portsmouth",
      image: Picture4,
    },
    {
      name: "Dr Steven Kator Iorfa",
      bio: "He is a Research Fellow and has recently completed a PhD in the area of food waste behaviours at the University of Portsmouth.",
      university: "University of Nottingham",
      image: Picture6,
    },
  ];

  const values = [
    {
      icon: "🔬",
      title: "Research Excellence",
      text: "Conducting rigorous, impactful research that drives meaningful change in food sustainability practices.",
    },
    {
      icon: "🤝",
      title: "Collaborative Innovation",
      text: "Building partnerships across academia, industry, and policy to create holistic solutions.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      text: "Addressing food waste challenges with international perspectives and sustainable approaches.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Meet Our Expert Team</h1>
          <p className={styles.heroSubtitle}>
            Leading researchers and academics dedicated to transforming the
            global food system through innovative research, sustainable
            practices, and strategic partnerships.
          </p>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Expert Researchers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Universities</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Research Team</h2>
          <p className={styles.sectionSubtitle}>
            A diverse group of scholars bringing unique expertise in
            sustainability, accounting, finance, and food systems research.
          </p>

          <div className={styles.teamGrid}>
            {teamBios.map((member, index) => (
              <article key={index} className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  {/* <div className={styles.cardBadge}>{member.badge}</div> */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.memberImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  if(member.university!= " ")
                  {
                    <span className={styles.memberUniversity}>
                      {member.university}
                    </span>
                  }
                  <div className={styles.divider}></div>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.researchTag}>{member.research}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContainer}>
            <div className={styles.missionHeader}>
              <h2 className={styles.missionTitle}>Our Mission & Values</h2>
              <div className={styles.missionDivider}></div>
              <p className={styles.missionDescription}>
                Our interdisciplinary team combines expertise in accounting,
                finance, sustainability, and food systems to tackle one of the
                most pressing global challenges: food waste. Through rigorous
                research, innovative methodologies, and collaborative
                partnerships, we create sustainable solutions that benefit
                businesses, communities, and the environment.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueText}>{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
