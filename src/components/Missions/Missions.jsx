import React from "react";
import MissionItem from "./MissionItem";
import "./Missions.css";

export default function Missions({activeTab, completedMissions, missions}) {

  const renderContent = () => {
    switch (activeTab) {
      case "missions":
        return missions.map((mission) => (
          <div key={mission.category} className="mission-category">
            <h2>{mission.category}</h2>
            {mission.tasks.map((task) => (
              <MissionItem key={task.id} task={task} />
            ))}
          </div>
        ));
      case "achievements":
        return completedMissions.map((mission) => (
          <div key={mission.category} className="mission-category">
            <h2>{mission.category}</h2>
            {mission.tasks.map((task) => (
              <MissionItem key={task.id} task={task} />
            ))}
          </div>
        ));
      default:
        return (
          <div className="default">
            <h2>Welcome</h2>
            <p>Select a tab to see more content.</p>
          </div>
        );
    }
  };

  return (
    <div className="missions">
      <div className="missions-body">{renderContent()}</div>
    </div>
  );
}
