"use client";

import { useState, useRef, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";
import styles from "./UKstates.module.css";

export default function UKStates() {
  // const Ukdata = [
  //   {
  //     company: "Sainsbury",
  //     color: "#c82ce8",
  //     data: [
  //       {
  //         from: 2016,
  //         to: 2017,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 30732.89183222958,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 40316,
  //         foodWaste: 27844,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 10419.0,
  //         humanRedistribution: 2063,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 39000,
  //         foodWaste: 29500,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 7500.0,
  //         humanRedistribution: "1,000+",
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 4342720,
  //         unsoldFood: 34609,
  //         foodSurplus: 40795,
  //         foodWaste: 31615,
  //         foodWastePerHandled: 0.00728,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 7582.0,
  //         humanRedistribution: 1562,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 36337,
  //         foodWaste: 26544,
  //         foodWastePerHandled: 0.00533,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 7932.0,
  //         humanRedistribution: 1861,
  //         foodWasteReductionRate: -0.16039854499446465,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 4977148,
  //         unsoldFood: 0,
  //         foodSurplus: 35474,
  //         foodWaste: 25483,
  //         foodWastePerHandled: 0.00512,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 5919.0,
  //         humanRedistribution: 4072,
  //         foodWasteReductionRate: -0.19395856397279773,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 3634573,
  //         unsoldFood: 30399,
  //         foodSurplus: 32494.184,
  //         foodWaste: 23443,
  //         foodWastePerHandled: 0.00645,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 5046.0,
  //         humanRedistribution: 4020,
  //         foodWasteReductionRate: -0.258484896409932,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 4826012,
  //         unsoldFood: 30983,
  //         foodSurplus: 0,
  //         foodWaste: 30983,
  //         foodWastePerHandled: 0.00642,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 4665.0,
  //         humanRedistribution: 6345,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2024,
  //         to: 2025,
  //         foodHandled: 4962074,
  //         unsoldFood: 30616,
  //         foodSurplus: 0,
  //         foodWaste: 30616,
  //         foodWastePerHandled: 0.00617,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 3781.0,
  //         humanRedistribution: 7386,
  //         foodWasteReductionRate: 0,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Asda",
  //     color: "#4ECDC4",
  //     data: [
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 29910,
  //         foodWaste: 28372,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 42.0,
  //         humanRedistribution: 1496,
  //         foodWasteReductionRate: 0.05763065682546783,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 31881,
  //         foodWaste: 28832,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 82.0,
  //         humanRedistribution: 2966,
  //         foodWasteReductionRate: 0.07477820025348543,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 31368,
  //         foodWaste: 27072,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 547.0,
  //         humanRedistribution: 3749,
  //         foodWasteReductionRate: 0.009170208007157236,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 5689500,
  //         unsoldFood: 0,
  //         foodSurplus: 34137,
  //         foodWaste: 29641,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 238.0,
  //         humanRedistribution: 4258,
  //         foodWasteReductionRate: 0.10493551032580332,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 32923,
  //         foodWaste: 28307,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 652.0,
  //         humanRedistribution: 3964,
  //         foodWasteReductionRate: 0.0552076343845523,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 33501,
  //         foodWaste: 29413,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 220.0,
  //         humanRedistribution: 3869,
  //         foodWasteReductionRate: 0.09643629314843809,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Morrisons",
  //     color: "#FFA07A",
  //     data: [
  //       {
  //         from: 2016,
  //         to: 2017,
  //         foodHandled: 4097841,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 16141,
  //         foodWastePerHandled: 0.0039,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1912,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 4041575,
  //         unsoldFood: 0,
  //         foodSurplus: 11028.8,
  //         foodWaste: 15253,
  //         foodWastePerHandled: 0.0038,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 2244,
  //         foodWasteReductionRate: -0.0256410256410256,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 3911799,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 14023,
  //         foodWastePerHandled: 0.0036,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 3554,
  //         foodWasteReductionRate: -0.0769230769230769,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 3986312,
  //         unsoldFood: 0,
  //         foodSurplus: 977,
  //         foodWaste: 13665,
  //         foodWastePerHandled: 0.0034,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 792,
  //         foodWasteReductionRate: -0.12820512820512822,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 4192589,
  //         unsoldFood: 0,
  //         foodSurplus: 134,
  //         foodWaste: 14366,
  //         foodWastePerHandled: 0.0034,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.12820512820512822,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 14092,
  //         foodWastePerHandled: 0.0037,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.0512820512820512,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 11133,
  //         foodWastePerHandled: 0.0034,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.12820512820512822,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 10384,
  //         foodWastePerHandled: 0.0031,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.20512820512820512,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Aldi",
  //     color: "#98D8C8",
  //     data: [
  //       {
  //         from: 2016,
  //         to: 2017,
  //         foodHandled: 3814568,
  //         unsoldFood: 0,
  //         foodSurplus: 44809.11392405063,
  //         foodWaste: 44249,
  //         foodWastePerHandled: 0.0116,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 560.1139240506329,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 4135443,
  //         unsoldFood: 0,
  //         foodSurplus: 33538.65106251925,
  //         foodWaste: 32670,
  //         foodWastePerHandled: 0.0079,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 868.6510625192486,
  //         foodWasteReductionRate: -0.31896551724137917,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 4429710,
  //         unsoldFood: 0,
  //         foodSurplus: 32354.186514237324,
  //         foodWaste: 30565,
  //         foodWastePerHandled: 0.0069,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1789.186514237324,
  //         foodWasteReductionRate: -0.4051724137931034,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 4861791,
  //         unsoldFood: 0,
  //         foodSurplus: 36657.66374071573,
  //         foodWaste: 32574,
  //         foodWastePerHandled: 0.0067,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 4083.6637407157323,
  //         foodWasteReductionRate: -0.42241379310344823,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 4906212,
  //         unsoldFood: 0,
  //         foodSurplus: 37142.69327827483,
  //         foodWaste: 32381,
  //         foodWastePerHandled: 0.0066,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 4761.693278274834,
  //         foodWasteReductionRate: -0.43103448275862066,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 5140400,
  //         unsoldFood: 0,
  //         foodSurplus: 28788,
  //         foodWaste: 25702,
  //         foodWastePerHandled: 0.005,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 3086.0824372759857,
  //         foodWasteReductionRate: -0.5689655172413792,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 5380000.0,
  //         unsoldFood: 0,
  //         foodSurplus: 24886,
  //         foodWaste: 20444,
  //         foodWastePerHandled: 0.0038,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 4442.183810103469,
  //         foodWasteReductionRate: -0.6724137931034483,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 5511562.5,
  //         unsoldFood: 0,
  //         foodSurplus: 25560,
  //         foodWaste: 17637,
  //         foodWastePerHandled: 0.0032,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 7923.869565217392,
  //         foodWasteReductionRate: -0.7241379310344828,
  //       },
  //     ],
  //   },
  //   {
  //     company: "M&S",
  //     color: "#F7DC6F",
  //     data: [
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 19016,
  //         foodSurplus: 840,
  //         foodWaste: 18176,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 840,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 14991,
  //         foodSurplus: 1177,
  //         foodWaste: 13814,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1177,
  //         foodWasteReductionRate: -0.23998679577464788,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 0,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 2209,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 0,
  //         unsoldFood: 16645,
  //         foodSurplus: 4991,
  //         foodWaste: 11654,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 4991,
  //         foodWasteReductionRate: -0.358824823943662,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 19100,
  //         foodSurplus: 6231,
  //         foodWaste: 12869,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 6231,
  //         foodWasteReductionRate: -0.29197843309859156,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 0,
  //         unsoldFood: 18204,
  //         foodSurplus: 8375,
  //         foodWaste: 9829,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 8375,
  //         foodWasteReductionRate: -0.4592319542253521,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 0,
  //         unsoldFood: 21200,
  //         foodSurplus: 10632,
  //         foodWaste: 10568,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 10632,
  //         foodWasteReductionRate: -0.4185739436619718,
  //       },
  //       {
  //         from: 2024,
  //         to: 2025,
  //         foodHandled: 0,
  //         unsoldFood: 25999,
  //         foodSurplus: 13502,
  //         foodWaste: 12497,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 13502,
  //         foodWasteReductionRate: -0.3124449823943662,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Lidl",
  //     color: "#BB8FCE",
  //     data: [
  //       {
  //         from: 2016,
  //         to: 2017,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 37701,
  //         foodWaste: 37168,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 533,
  //         foodWasteReductionRate: -0.13280268118977803,
  //       },
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 38196,
  //         foodWaste: 36346,
  //         foodWastePerHandled: 0.013,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1850,
  //         foodWasteReductionRate: -0.1432760787599498,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 40428,
  //         foodWaste: 38981,
  //         foodWastePerHandled: 0.0136,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1447,
  //         foodWasteReductionRate: -0.25198994553833265,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 41430,
  //         foodWaste: 39890,
  //         foodWastePerHandled: 0.0121,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1540,
  //         foodWasteReductionRate: -0.32090490155006285,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 39137,
  //         foodWaste: 37344,
  //         foodWastePerHandled: 0.0105,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1793,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 41540,
  //         foodWaste: 39217,
  //         foodWastePerHandled: 0.0099,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 2323,
  //         foodWasteReductionRate: 0,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Waitrose",
  //     color: "#85C1E2",
  //     data: [
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 6969,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 6481.17,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.06999999999999999,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 5526.42,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.2069995695221696,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 5516.66,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.20840005739704406,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 5326,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 1841,
  //         foodWasteReductionRate: -0.2357583584445401,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 5401,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 3256,
  //         foodWasteReductionRate: -0.22499641268474674,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 4977,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.28583727938011194,
  //       },
  //       {
  //         from: 2024,
  //         to: 2025,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 5003,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.2821064715167169,
  //       },
  //     ],
  //   },
  //   {
  //     company: "Iceland",
  //     color: "#F8B739",
  //     data: [
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 1327435.8974358975,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 10354,
  //         foodWastePerHandled: 0.0078,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 1339041.095890411,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 9775,
  //         foodWastePerHandled: 0.0073,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 0,
  //         foodWasteReductionRate: -0.055920417230056016,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 1375343.0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 7952,
  //         foodWastePerHandled: 0.005781830423392565,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 157.8,
  //         foodWasteReductionRate: -0.23198763762796987,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 1501925.0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 9555,
  //         foodWastePerHandled: 0.0063,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 1274.9,
  //         humanRedistribution: 368.9,
  //         foodWasteReductionRate: -0.0771682441568476,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 1343106.0,
  //         unsoldFood: 0,
  //         foodSurplus: 10988,
  //         foodWaste: 10015,
  //         foodWastePerHandled: 0.00745659687321775,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0.0,
  //         humanRedistribution: 973.6,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 1258051.0,
  //         unsoldFood: 0,
  //         foodSurplus: 10999,
  //         foodWaste: 8826,
  //         foodWastePerHandled: 0.007015613834415298,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 73.0,
  //         humanRedistribution: 2100,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 1190375.0,
  //         unsoldFood: 0,
  //         foodSurplus: 9168,
  //         foodWaste: 6609,
  //         foodWastePerHandled: 0.005552031922713431,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 135.0,
  //         humanRedistribution: 2424,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2024,
  //         to: 2025,
  //         foodHandled: 1203947.0,
  //         unsoldFood: 0,
  //         foodSurplus: 8694,
  //         foodWaste: 5802,
  //         foodWastePerHandled: 0.004819149015695873,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 143.0,
  //         humanRedistribution: 2789,
  //         foodWasteReductionRate: 0,
  //       },
  //     ],
  //   },
  //   {
  //     company: "COOP",
  //     color: "#52BE80",
  //     data: [
  //       {
  //         from: 2016,
  //         to: 2017,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 23689,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 442,
  //         foodWasteReductionRate: -0.12018570102135562,
  //       },
  //       {
  //         from: 2017,
  //         to: 2018,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 19665,
  //         foodWastePerHandled: 0,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 840,
  //         foodWasteReductionRate: -0.26963788300835656,
  //       },
  //       {
  //         from: 2018,
  //         to: 2019,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 19679,
  //         foodWastePerHandled: 0.0129,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 2532,
  //         foodWasteReductionRate: -0.26911792014856084,
  //       },
  //       {
  //         from: 2019,
  //         to: 2020,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 20931,
  //         foodWastePerHandled: 0.0125,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 4045,
  //         foodWasteReductionRate: -0.2226183844011142,
  //       },
  //       {
  //         from: 2020,
  //         to: 2021,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 21424,
  //         foodWastePerHandled: 0.014,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 6951,
  //         foodWasteReductionRate: -0.20430826369545033,
  //       },
  //       {
  //         from: 2021,
  //         to: 2022,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 21388,
  //         foodWastePerHandled: 0.013,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 7309,
  //         foodWasteReductionRate: -0.20564531104921077,
  //       },
  //       {
  //         from: 2022,
  //         to: 2023,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 15151,
  //         foodWastePerHandled: 0.01,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 6095,
  //         foodWasteReductionRate: 0,
  //       },
  //       {
  //         from: 2023,
  //         to: 2024,
  //         foodHandled: 0,
  //         unsoldFood: 0,
  //         foodSurplus: 0,
  //         foodWaste: 14726,
  //         foodWastePerHandled: 0.0103,
  //         unsoldFoodPerHandled: 0,
  //         foodWasteToAnimalFeed: 0,
  //         humanRedistribution: 6111,
  //         foodWasteReductionRate: 0,
  //       },
  //     ],
  //   },
  // ];

  // State management
  const [selectedMetric, setSelectedMetric] = useState(
    "foodWasteReductionRate"
  );
  const [selectedCompanies, setSelectedCompanies] = useState([
    "Sainsbury",
    "Asda",
    "Morrisons",
    "Aldi",
    "M&S",
  ]);
  const [Ukdata, setUkdata] = useState([]);

  const chartRef = useRef(null);

  // All available metrics
  const metrics = [
    { value: "foodHandled", label: "Food Handled (in Tonnes)" },
    { value: "unsoldFood", label: "Unsold Food (in Tonnes)" },
    { value: "foodSurplus", label: "Food Surplus" },
    { value: "foodWaste", label: "Food Waste" },
    {
      value: "foodWastePerHandled",
      label: "Food Waste Per Handled (in Tonnes)",
    },
    { value: "unsoldFoodPerHandled", label: "Unsold Food Per Handled" },
    { value: "foodWasteToAnimalFeed", label: "Food Waste To Animal Feed" },
    { value: "humanRedistribution", label: "Human Redistribution" },
    { value: "foodWasteReductionRate", label: "Food Waste Reduction Rate" },
  ];

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/api/ukcom", {
          method: "GET",
        });
        const data = await response.json();
        setUkdata(data.data);
        console.log("Fetched data:", data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  // All companies
  const companies = Ukdata.map((item) => item.company);

  // Helper function to get company color
  const getCompanyColor = (companyName) => {
    const company = Ukdata.find((item) => item.company === companyName);
    return company?.color || "#3b82f6"; // Default color if not found
  };

  // Toggle company selection
  const toggleCompany = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  // Select all companies
  const selectAllCompanies = () => {
    setSelectedCompanies(companies);
  };

  // Clear all companies
  const clearAllCompanies = () => {
    setSelectedCompanies([]);
  };

  // Prepare data for radar chart
  const prepareChartData = () => {
    // Get all unique year ranges from all companies
    const allYearRanges = new Set();
    Ukdata.forEach((companyData) => {
      companyData.data.forEach((yearData) => {
        const yearRange = `${yearData.from}/${yearData.to}`;
        allYearRanges.add(yearRange);
      });
    });

    const yearRanges = Array.from(allYearRanges).sort();

    // For each year range, create an object with the metric value for each selected company
    return yearRanges.map((yearRange) => {
      const [from, to] = yearRange.split("/").map(Number);
      const dataPoint = { yearRange, from, to };

      selectedCompanies.forEach((company) => {
        const companyData = Ukdata.find((c) => c.company === company);
        if (companyData) {
          const yearData = companyData.data.find(
            (d) => d.from === from && d.to === to
          );
          if (yearData) {
            let value = yearData[selectedMetric];
            // Handle string values like "1,000+"
            if (typeof value === "string") {
              value = parseFloat(value.replace(/,/g, "").replace("+", "")) || 0;
            }
            dataPoint[company] = value;
          }
        }
      });

      return dataPoint;
    });
  };

  const chartData = prepareChartData();

  // Animation state for chart entrance
  const [chartVisible, setChartVisible] = useState(false);

  // Trigger chart animation on mount or when companies change
  useState(() => {
    if (selectedCompanies.length > 0) {
      setChartVisible(false);
      const timer = setTimeout(() => setChartVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [selectedCompanies]);

  // Download chart as PNG
  const downloadChart = async () => {
    if (chartRef.current) {
      try {
        const canvas = await html2canvas(chartRef.current, {
          backgroundColor: "#ffffffff",
          scale: 2,
          useCORS: true,
          logging: false,
        });
        const ctx = canvas.getContext("2d");

        // ✅ Apply a tint or color overlay to the image
        ctx.globalCompositeOperation = "source-atop";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // dark overlay
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Download directly with high quality
        const link = document.createElement("a");
        link.download = "supermarket_chart.png";
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();
      } catch (error) {
        console.error("Error downloading chart:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>UK Supermarket Food Waste Dashboard</h1>
          <p className={styles.subtitle}>
            Interactive analysis of food waste metrics across major UK retailers
          </p>
        </div>

        {/* Main Card */}
        <div className={styles.mainCard}>
          {/* Blue Header */}
          <div className={styles.cardHeader}>
            <h2 className={styles.cardHeaderTitle}>Radar Chart Analysis</h2>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <div className={styles.controlsTop}>
              {/* Metric Selector */}
              <div className={styles.metricSelector}>
                <label className={styles.label}>Select Metric</label>
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className={styles.select}
                >
                  {metrics.map((metric) => (
                    <option key={metric.value} value={metric.value}>
                      {metric.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Download Button */}
              <div className={styles.downloadButtonWrapper}>
                <button
                  onClick={downloadChart}
                  className={styles.downloadButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.downloadIcon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download as PNG
                </button>
              </div>
            </div>

            {/* Company Selector */}
            <div className={styles.companySelector}>
              <div className={styles.companySelectorHeader}>
                <label className={styles.label}>Select Companies</label>
                <div className={styles.bulkActions}>
                  <button
                    onClick={selectAllCompanies}
                    className={styles.bulkButton}
                    type="button"
                  >
                    Select All
                  </button>
                  <button
                    onClick={clearAllCompanies}
                    className={styles.bulkButton}
                    type="button"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              <div className={styles.companyGrid}>
                {companies.map((company) => (
                  <label key={company} className={styles.companyLabel}>
                    <input
                      type="checkbox"
                      checked={selectedCompanies.includes(company)}
                      onChange={() => toggleCompany(company)}
                      className={styles.checkbox}
                    />
                    <span className={styles.companyName}>
                      <span
                        className={styles.colorDot}
                        style={{ backgroundColor: getCompanyColor(company) }}
                      ></span>
                      {company}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className={styles.chartContainer} ref={chartRef}>
            <div className={`${styles.chartWrapper} ${styles.chart3D}`}>
              {selectedCompanies.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyStateText}>
                    Please select at least one company to display the chart
                  </p>
                </div>
              ) : (
                <div
                  className={`${styles.chartInner} ${
                    chartVisible ? styles.chartAnimate : ""
                  }`}
                >
                  <ResponsiveContainer width="100%" height={700}>
                    <RadarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
                    >
                      <defs>
                        {selectedCompanies.map((company) => (
                          <filter
                            key={`shadow-${company}`}
                            id={`shadow-${company}`}
                            height="200%"
                          >
                            <feDropShadow
                              dx="2"
                              dy="3"
                              stdDeviation="3"
                              floodColor={getCompanyColor(company)}
                              floodOpacity="0.4"
                            />
                          </filter>
                        ))}
                        {selectedCompanies.map((company) => (
                          <linearGradient
                            key={`gradient-${company}`}
                            id={`gradient-${company}`}
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor={getCompanyColor(company)}
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="100%"
                              stopColor={getCompanyColor(company)}
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        ))}
                      </defs>

                      <PolarGrid
                        stroke="#cbd5e1"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                      <PolarAngleAxis
                        dataKey="yearRange"
                        tick={{
                          fill: "#151516ff",
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, "auto"]}
                        tick={{
                          fill: "#080808ff",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                        stroke="#94a3b8"
                        strokeWidth={2}
                      />
                      {selectedCompanies.map((company, index) => (
                        <Radar
                          key={company}
                          name={company}
                          dataKey={company}
                          stroke={getCompanyColor(company)}
                          fill={`url(#gradient-${company})`}
                          fillOpacity={0.6}
                          strokeWidth={4}
                          dot={{
                            r: 6,
                            fill: getCompanyColor(company),
                            strokeWidth: 3,
                            stroke: "#ffffff",
                            filter: `url(#shadow-${company})`,
                          }}
                          activeDot={{
                            r: 8,
                            fill: getCompanyColor(company),
                            stroke: "#ffffff",
                            strokeWidth: 3,
                          }}
                          isAnimationActive={true}
                          animationBegin={index * 150}
                          animationDuration={1800}
                          animationEasing="ease-in-out"
                        />
                      ))}
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(8, 8, 8, 0.98)",
                          border: "4px solid #10396eff",
                          borderRadius: "12px",
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          padding: "16px",
                          backdropFilter: "blur(10px)",
                        }}
                        labelStyle={{
                          fontWeight: "700",
                          marginBottom: "12px",
                          fontSize: "14px",
                          color: "#aeb2b8ff",
                        }}
                        itemStyle={{
                          fontSize: "13px",
                          fontWeight: "600",
                          padding: "4px 0",
                        }}
                      />
                      <Legend
                        wrapperStyle={{
                          paddingTop: "40px",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                        iconType="circle"
                        iconSize={14}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>

          {/* Info Footer */}
          <div className={styles.infoFooter}>
            <div className={styles.infoText}>
              <p>
                <strong>Selected Metric:</strong>{" "}
                {metrics.find((m) => m.value === selectedMetric)?.label}
              </p>
              <p>
                <strong>Companies Displayed:</strong>{" "}
                {selectedCompanies.length > 0
                  ? selectedCompanies.join(", ")
                  : "None"}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className={styles.infoCardsGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={`${styles.iconCircle} ${styles.iconCircleBlue}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.icon} ${styles.iconBlue}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>Total Companies</h3>
            </div>
            <p className={`${styles.infoCardValue} ${styles.valueBlue}`}>
              {companies.length}
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={`${styles.iconCircle} ${styles.iconCircleGreen}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.icon} ${styles.iconGreen}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>Available Metrics</h3>
            </div>
            <p className={`${styles.infoCardValue} ${styles.valueGreen}`}>
              {metrics.length}
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div
                className={`${styles.iconCircle} ${styles.iconCirclePurple}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.icon} ${styles.iconPurple}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>Years Tracked</h3>
            </div>
            <p className={`${styles.infoCardValue} ${styles.valuePurple}`}>
              2016-2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
