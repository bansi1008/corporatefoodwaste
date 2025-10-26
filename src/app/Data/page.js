"use client";

import Navbar from "../ComponentHome/Navbar";
import Footer from "../ComponentHome/Footer";
import DataHero from "./DataComponent/DataHero";
import CompanyTargets from "./DataComponent/CompanyTargets";
import DocumentsChart from "./DataComponent/DocumentsChart";
import RedistributionStats from "./DataComponent/RedistributionStats";
import FoodDonations from "./DataComponent/FoodDonations";
import Alliances from "./DataComponent/Alliances";

export default function Page() {
  return (
    <div>
      <Navbar />
      <DataHero />
      <CompanyTargets />
      <DocumentsChart />
      <RedistributionStats />
      <FoodDonations />
      <Alliances />
      <Footer />
    </div>
  );
}
