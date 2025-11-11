"use client";

export default function Page() {
  const foodWasteData = {
    labels: [
      "Food Waste (kg/month)",
      "Recycling Efficiency (%)",
      "Carbon Footprint (kg CO₂)",
      "Donation Rate (%)",
      "Operational Efficiency (%)",
    ],
    datasets: [
      {
        label: "GreenBite Ltd",
        data: [120, 85, 300, 40, 75],
      },
      {
        label: "EcoEats Pvt Ltd",
        data: [90, 92, 260, 55, 82],
      },
      {
        label: "ZeroWaste Foods",
        data: [60, 95, 180, 70, 88],
      },
      {
        label: "FreshServe UK",
        data: [140, 78, 340, 30, 68],
      },
      {
        label: "GreenPlate Org",
        data: [100, 88, 220, 60, 80],
      },
    ],
  };
}
