import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <Link
        to="/missions"
        className={`tab${activeTab === "missions" ? " active" : ""}`}
        onClick={() => setActiveTab("missions")}
      >
        MISSIONS
      </Link>
      <Link
        to="/achievements"
        className={`tab${activeTab === "achievements" ? " active" : ""}`}
        onClick={() => setActiveTab("achievements")}

      >
        ACHIEVEMENTS
      </Link>
    </div>
  );
}
