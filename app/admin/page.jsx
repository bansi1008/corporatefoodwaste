"use client";
import { useState } from "react";
import UKDataForm from "./UKcomponent/UKDataForm";
import UKDocumentsForm from "./UKcomponent/UKDocumentsForm";
import UKSupermarketForm from "./UKcomponent/UKSupermarketForm";
import styles from "./admin.module.css";

export default function Admin() {
  const [country, setCountry] = useState("");
  const [dataType, setDataType] = useState("");

  const dataTypes = [
    "Company Targets",
    "Documents",
    "Supermarket Food Waste",
    "Alliances & Charities",
  ];

  const resetSelection = () => {
    setCountry("");
    setDataType("");
  };

  const renderDataForm = () => {
    if (country === "UK" && dataType === "Company Targets") {
      return <UKDataForm />;
    }
    if (country === "UK" && dataType === "Documents") {
      return <UKDocumentsForm />;
    }
    if (country === "UK" && dataType === "Supermarket Food Waste") {
      return <UKSupermarketForm />;
    }
    // Add other data type forms here
    return (
      <div className={styles.placeholderMessage}>
        <p>
          Form for {country} - {dataType} is coming soon...
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <p className={styles.subtitle}>
          Manage and submit data for different regions
        </p>
      </div>

      {!country ? (
        <div className={styles.selectionSection}>
          <h2 className={styles.sectionTitle}>Select Country/Region</h2>
          <div className={styles.buttonGrid}>
            <button
              className={styles.countryButton}
              onClick={() => setCountry("UK")}
            >
              <span className={styles.buttonIcon}>🇬🇧</span>
              <span className={styles.buttonText}>UK Data</span>
            </button>
            <button
              className={styles.countryButton}
              onClick={() => setCountry("EU")}
            >
              <span className={styles.buttonIcon}>🇪🇺</span>
              <span className={styles.buttonText}>EU Data</span>
            </button>
          </div>
        </div>
      ) : !dataType ? (
        <div className={styles.selectionSection}>
          <div className={styles.breadcrumb}>
            <button onClick={resetSelection} className={styles.backButton}>
              ← Back to Country Selection
            </button>
            <span className={styles.currentSelection}>{country} Data</span>
          </div>
          <h2 className={styles.sectionTitle}>Select Data Type</h2>
          <div className={styles.dataTypeGrid}>
            {dataTypes.map((type) => (
              <button
                key={type}
                className={styles.dataTypeButton}
                onClick={() => setDataType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.formSection}>
          <div className={styles.breadcrumb}>
            <button onClick={resetSelection} className={styles.backButton}>
              ← Back to Country Selection
            </button>
            <span className={styles.separator}>/</span>
            <button
              onClick={() => setDataType("")}
              className={styles.backButton}
            >
              Back to Data Type
            </button>
            <span className={styles.currentSelection}>
              {country} - {dataType}
            </span>
          </div>
          {renderDataForm()}
        </div>
      )}
    </div>
  );
}
