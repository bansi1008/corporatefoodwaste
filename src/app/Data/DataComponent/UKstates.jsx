"use client";

import { useState, useRef } from "react";
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
  const Ukdata = [
    {
      company: "Sainsbury",
      data: [
        {
          year: "2016/17",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 30732.89183222958,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: null,
        },
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 40316,
          foodWaste: 27844,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 10419.0,
          humanRedistribution: 2063,
          foodWasteReductionRate: null,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 39000,
          foodWaste: 29500,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 7500.0,
          humanRedistribution: "1,000+",
          foodWasteReductionRate: null,
        },
        {
          year: "2019/20",
          foodHandled: 4342720,
          unsoldFood: 34609,
          foodSurplus: 40795,
          foodWaste: 31615,
          foodWastePerHandled: 0.00728,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 7582.0,
          humanRedistribution: 1562,
          foodWasteReductionRate: null,
        },
        {
          year: "2020/21",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 36337,
          foodWaste: 26544,
          foodWastePerHandled: 0.00533,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 7932.0,
          humanRedistribution: 1861,
          foodWasteReductionRate: -0.16039854499446465,
        },
        {
          year: "2021/22",
          foodHandled: 4977148,
          unsoldFood: null,
          foodSurplus: 35474,
          foodWaste: 25483,
          foodWastePerHandled: 0.00512,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 5919.0,
          humanRedistribution: 4072,
          foodWasteReductionRate: -0.19395856397279773,
        },
        {
          year: "2022/23",
          foodHandled: 3634573,
          unsoldFood: 30399,
          foodSurplus: 32494.184,
          foodWaste: 23443,
          foodWastePerHandled: 0.00645,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 5046.0,
          humanRedistribution: 4020,
          foodWasteReductionRate: -0.258484896409932,
        },
        {
          year: "2023/24",
          foodHandled: 4826012,
          unsoldFood: 30983,
          foodSurplus: null,
          foodWaste: 30983,
          foodWastePerHandled: 0.00642,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 4665.0,
          humanRedistribution: 6345,
          foodWasteReductionRate: null,
        },
        {
          year: "2024/25",
          foodHandled: 4962074,
          unsoldFood: 30616,
          foodSurplus: null,
          foodWaste: 30616,
          foodWastePerHandled: 0.00617,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 3781.0,
          humanRedistribution: 7386,
          foodWasteReductionRate: null,
        },
      ],
    },
    {
      company: "Asda",
      data: [
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 29910,
          foodWaste: 28372,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 42.0,
          humanRedistribution: 1496,
          foodWasteReductionRate: 0.05763065682546783,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 31881,
          foodWaste: 28832,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 82.0,
          humanRedistribution: 2966,
          foodWasteReductionRate: 0.07477820025348543,
        },
        {
          year: "2019/20",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 31368,
          foodWaste: 27072,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 547.0,
          humanRedistribution: 3749,
          foodWasteReductionRate: 0.009170208007157236,
        },
        {
          year: "2020/21",
          foodHandled: 5689500,
          unsoldFood: null,
          foodSurplus: 34137,
          foodWaste: 29641,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 238.0,
          humanRedistribution: 4258,
          foodWasteReductionRate: 0.10493551032580332,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 32923,
          foodWaste: 28307,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 652.0,
          humanRedistribution: 3964,
          foodWasteReductionRate: 0.0552076343845523,
        },
        {
          year: "2022/23",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 33501,
          foodWaste: 29413,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 220.0,
          humanRedistribution: 3869,
          foodWasteReductionRate: 0.09643629314843809,
        },
      ],
    },
    {
      company: "Morrisons",
      data: [
        {
          year: "2016/17",
          foodHandled: 4097841,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 16141,
          foodWastePerHandled: 0.0039,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1912,
          foodWasteReductionRate: null,
        },
        {
          year: "2017/18",
          foodHandled: 4041575,
          unsoldFood: null,
          foodSurplus: 11028.8,
          foodWaste: 15253,
          foodWastePerHandled: 0.0038,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 2244,
          foodWasteReductionRate: -0.0256410256410256,
        },
        {
          year: "2018/19",
          foodHandled: 3911799,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 14023,
          foodWastePerHandled: 0.0036,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 3554,
          foodWasteReductionRate: -0.0769230769230769,
        },
        {
          year: "2019/20",
          foodHandled: 3986312,
          unsoldFood: null,
          foodSurplus: 977,
          foodWaste: 13665,
          foodWastePerHandled: 0.0034,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 792,
          foodWasteReductionRate: -0.12820512820512822,
        },
        {
          year: "2020/21",
          foodHandled: 4192589,
          unsoldFood: null,
          foodSurplus: 134,
          foodWaste: 14366,
          foodWastePerHandled: 0.0034,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.12820512820512822,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 14092,
          foodWastePerHandled: 0.0037,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.0512820512820512,
        },
        {
          year: "2022/23",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 11133,
          foodWastePerHandled: 0.0034,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.12820512820512822,
        },
        {
          year: "2023/24",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 10384,
          foodWastePerHandled: 0.0031,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.20512820512820512,
        },
      ],
    },
    {
      company: "Aldi",
      data: [
        {
          year: "2016/17",
          foodHandled: 3814568,
          unsoldFood: null,
          foodSurplus: 44809.11392405063,
          foodWaste: 44249,
          foodWastePerHandled: 0.0116,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 560.1139240506329,
          foodWasteReductionRate: null,
        },
        {
          year: "2017/18",
          foodHandled: 4135443,
          unsoldFood: null,
          foodSurplus: 33538.65106251925,
          foodWaste: 32670,
          foodWastePerHandled: 0.0079,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 868.6510625192486,
          foodWasteReductionRate: -0.31896551724137917,
        },
        {
          year: "2018/19",
          foodHandled: 4429710,
          unsoldFood: null,
          foodSurplus: 32354.186514237324,
          foodWaste: 30565,
          foodWastePerHandled: 0.0069,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1789.186514237324,
          foodWasteReductionRate: -0.4051724137931034,
        },
        {
          year: "2019/20",
          foodHandled: 4861791,
          unsoldFood: null,
          foodSurplus: 36657.66374071573,
          foodWaste: 32574,
          foodWastePerHandled: 0.0067,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 4083.6637407157323,
          foodWasteReductionRate: -0.42241379310344823,
        },
        {
          year: "2020/21",
          foodHandled: 4906212,
          unsoldFood: null,
          foodSurplus: 37142.69327827483,
          foodWaste: 32381,
          foodWastePerHandled: 0.0066,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 4761.693278274834,
          foodWasteReductionRate: -0.43103448275862066,
        },
        {
          year: "2021/22",
          foodHandled: 5140400,
          unsoldFood: null,
          foodSurplus: 28788,
          foodWaste: 25702,
          foodWastePerHandled: 0.005,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 3086.0824372759857,
          foodWasteReductionRate: -0.5689655172413792,
        },
        {
          year: "2022/23",
          foodHandled: 5380000.0,
          unsoldFood: null,
          foodSurplus: 24886,
          foodWaste: 20444,
          foodWastePerHandled: 0.0038,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 4442.183810103469,
          foodWasteReductionRate: -0.6724137931034483,
        },
        {
          year: "2023/24",
          foodHandled: 5511562.5,
          unsoldFood: null,
          foodSurplus: 25560,
          foodWaste: 17637,
          foodWastePerHandled: 0.0032,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 7923.869565217392,
          foodWasteReductionRate: -0.7241379310344828,
        },
      ],
    },
    {
      company: "M&S",
      data: [
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: 19016,
          foodSurplus: 840,
          foodWaste: 18176,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 840,
          foodWasteReductionRate: null,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: 14991,
          foodSurplus: 1177,
          foodWaste: 13814,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1177,
          foodWasteReductionRate: -0.23998679577464788,
        },
        {
          year: "2019/20",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: null,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 2209,
          foodWasteReductionRate: null,
        },
        {
          year: "2020/21",
          foodHandled: null,
          unsoldFood: 16645,
          foodSurplus: 4991,
          foodWaste: 11654,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 4991,
          foodWasteReductionRate: -0.358824823943662,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: 19100,
          foodSurplus: 6231,
          foodWaste: 12869,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 6231,
          foodWasteReductionRate: -0.29197843309859156,
        },
        {
          year: "2022/23",
          foodHandled: null,
          unsoldFood: 18204,
          foodSurplus: 8375,
          foodWaste: 9829,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 8375,
          foodWasteReductionRate: -0.4592319542253521,
        },
        {
          year: "2023/24",
          foodHandled: null,
          unsoldFood: 21200,
          foodSurplus: 10632,
          foodWaste: 10568,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 10632,
          foodWasteReductionRate: -0.4185739436619718,
        },
        {
          year: "2024/25",
          foodHandled: null,
          unsoldFood: 25999,
          foodSurplus: 13502,
          foodWaste: 12497,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 13502,
          foodWasteReductionRate: -0.3124449823943662,
        },
      ],
    },
    {
      company: "Lidl",
      data: [
        {
          year: "2016/17",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 37701,
          foodWaste: 37168,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 533,
          foodWasteReductionRate: -0.13280268118977803,
        },
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 38196,
          foodWaste: 36346,
          foodWastePerHandled: 0.013,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1850,
          foodWasteReductionRate: -0.1432760787599498,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 40428,
          foodWaste: 38981,
          foodWastePerHandled: 0.0136,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1447,
          foodWasteReductionRate: -0.25198994553833265,
        },
        {
          year: "2019/20",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 41430,
          foodWaste: 39890,
          foodWastePerHandled: 0.0121,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1540,
          foodWasteReductionRate: -0.32090490155006285,
        },
        {
          year: "2020/21",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 39137,
          foodWaste: 37344,
          foodWastePerHandled: 0.0105,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1793,
          foodWasteReductionRate: null,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: 41540,
          foodWaste: 39217,
          foodWastePerHandled: 0.0099,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 2323,
          foodWasteReductionRate: null,
        },
      ],
    },
    {
      company: "Waitrose",
      data: [
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 6969,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: null,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 6481.17,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.06999999999999999,
        },
        {
          year: "2019/20",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 5526.42,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.2069995695221696,
        },
        {
          year: "2020/21",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 5516.66,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.20840005739704406,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 5326,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 1841,
          foodWasteReductionRate: -0.2357583584445401,
        },
        {
          year: "2022/23",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 5401,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 3256,
          foodWasteReductionRate: -0.22499641268474674,
        },
        {
          year: "2023/24",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 4977,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.28583727938011194,
        },
        {
          year: "2024/25",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 5003,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.2821064715167169,
        },
      ],
    },
    {
      company: "Iceland",
      data: [
        {
          year: "2017/18",
          foodHandled: 1327435.8974358975,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 10354,
          foodWastePerHandled: 0.0078,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: null,
        },
        {
          year: "2018/19",
          foodHandled: 1339041.095890411,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 9775,
          foodWastePerHandled: 0.0073,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: null,
          foodWasteReductionRate: -0.055920417230056016,
        },
        {
          year: "2019/20",
          foodHandled: 1375343.0,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 7952,
          foodWastePerHandled: 0.005781830423392565,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 157.8,
          foodWasteReductionRate: -0.23198763762796987,
        },
        {
          year: "2020/21",
          foodHandled: 1501925.0,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 9555,
          foodWastePerHandled: 0.0063,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 1274.9,
          humanRedistribution: 368.9,
          foodWasteReductionRate: -0.0771682441568476,
        },
        {
          year: "2021/22",
          foodHandled: 1343106.0,
          unsoldFood: null,
          foodSurplus: 10988,
          foodWaste: 10015,
          foodWastePerHandled: 0.00745659687321775,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 0.0,
          humanRedistribution: 973.6,
          foodWasteReductionRate: null,
        },
        {
          year: "2022/23",
          foodHandled: 1258051.0,
          unsoldFood: null,
          foodSurplus: 10999,
          foodWaste: 8826,
          foodWastePerHandled: 0.007015613834415298,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 73.0,
          humanRedistribution: 2100,
          foodWasteReductionRate: null,
        },
        {
          year: "2023/24",
          foodHandled: 1190375.0,
          unsoldFood: null,
          foodSurplus: 9168,
          foodWaste: 6609,
          foodWastePerHandled: 0.005552031922713431,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 135.0,
          humanRedistribution: 2424,
          foodWasteReductionRate: null,
        },
        {
          year: "2024/25",
          foodHandled: 1203947.0,
          unsoldFood: null,
          foodSurplus: 8694,
          foodWaste: 5802,
          foodWastePerHandled: 0.004819149015695873,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: 143.0,
          humanRedistribution: 2789,
          foodWasteReductionRate: null,
        },
      ],
    },
    {
      company: "COOP",
      data: [
        {
          year: "2016/17",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 23689,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 442,
          foodWasteReductionRate: -0.12018570102135562,
        },
        {
          year: "2017/18",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 19665,
          foodWastePerHandled: null,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 840,
          foodWasteReductionRate: -0.26963788300835656,
        },
        {
          year: "2018/19",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 19679,
          foodWastePerHandled: 0.0129,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 2532,
          foodWasteReductionRate: -0.26911792014856084,
        },
        {
          year: "2019/20",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 20931,
          foodWastePerHandled: 0.0125,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 4045,
          foodWasteReductionRate: -0.2226183844011142,
        },
        {
          year: "2020/21",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 21424,
          foodWastePerHandled: 0.014,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 6951,
          foodWasteReductionRate: -0.20430826369545033,
        },
        {
          year: "2021/22",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 21388,
          foodWastePerHandled: 0.013,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 7309,
          foodWasteReductionRate: -0.20564531104921077,
        },
        {
          year: "2022/23",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 15151,
          foodWastePerHandled: 0.01,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 6095,
          foodWasteReductionRate: null,
        },
        {
          year: "2023/24",
          foodHandled: null,
          unsoldFood: null,
          foodSurplus: null,
          foodWaste: 14726,
          foodWastePerHandled: 0.0103,
          unsoldFoodPerHandled: null,
          foodWasteToAnimalFeed: null,
          humanRedistribution: 6111,
          foodWasteReductionRate: null,
        },
      ],
    },
  ];

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

  const chartRef = useRef(null);

  // All available metrics
  const metrics = [
    { value: "foodHandled", label: "Food Handled" },
    { value: "unsoldFood", label: "Unsold Food" },
    { value: "foodSurplus", label: "Food Surplus" },
    { value: "foodWaste", label: "Food Waste" },
    { value: "foodWastePerHandled", label: "Food Waste Per Handled" },
    { value: "unsoldFoodPerHandled", label: "Unsold Food Per Handled" },
    { value: "foodWasteToAnimalFeed", label: "Food Waste To Animal Feed" },
    { value: "humanRedistribution", label: "Human Redistribution" },
    { value: "foodWasteReductionRate", label: "Food Waste Reduction Rate" },
  ];

  // All companies
  const companies = Ukdata.map((item) => item.company);

  // Company colors
  const companyColors = {
    Sainsbury: "#FF6B6B",
    Asda: "#4ECDC4",
    Tesco: "#45B7D1",
    Morrisons: "#FFA07A",
    Aldi: "#98D8C8",
    "M&S": "#F7DC6F",
    Lidl: "#BB8FCE",
    Waitrose: "#85C1E2",
    Iceland: "#F8B739",
    COOP: "#52BE80",
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
    // Get all unique years from all companies
    const allYears = new Set();
    Ukdata.forEach((companyData) => {
      companyData.data.forEach((yearData) => {
        allYears.add(yearData.year);
      });
    });

    const years = Array.from(allYears).sort();

    // For each year, create an object with the metric value for each selected company
    return years.map((year) => {
      const dataPoint = { year };

      selectedCompanies.forEach((company) => {
        const companyData = Ukdata.find((c) => c.company === company);
        if (companyData) {
          const yearData = companyData.data.find((d) => d.year === year);
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
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
          logging: false,
        });

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
                        style={{ backgroundColor: companyColors[company] }}
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
                              floodColor={companyColors[company]}
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
                              stopColor={companyColors[company]}
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="100%"
                              stopColor={companyColors[company]}
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
                        dataKey="year"
                        tick={{
                          fill: "#1e293b",
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, "auto"]}
                        tick={{
                          fill: "#475569",
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
                          stroke={companyColors[company]}
                          fill={`url(#gradient-${company})`}
                          fillOpacity={0.6}
                          strokeWidth={4}
                          dot={{
                            r: 6,
                            fill: companyColors[company],
                            strokeWidth: 3,
                            stroke: "#ffffff",
                            filter: `url(#shadow-${company})`,
                          }}
                          activeDot={{
                            r: 8,
                            fill: companyColors[company],
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
                          backgroundColor: "rgba(255, 255, 255, 0.98)",
                          border: "2px solid #e2e8f0",
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
                          color: "#1e293b",
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
