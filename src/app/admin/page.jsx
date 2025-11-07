"use client";
import { useState } from "react";

export default function admin() {
  const [tab, setTab] = useState("UK");
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <button onClick={() => setTab("UK")}>UK Data</button>
        <button onClick={() => setTab("EU")}>EU Data</button>
      </div>
      <div>
        {tab === "UK" && <div>Displaying UK Data...</div>}
        {tab === "EU" && <div>Displaying EU Data...</div>}
      </div>
    </div>
  );
}
