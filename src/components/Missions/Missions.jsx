import React from "react";
import MissionItem from "./MissionItem";
import axios from "axios";
import "./Missions.css";
import { useTelegram } from "../../hooks/useTelegram";

export default function Missions({
  api,
  activeTab,
  completedMissions,
  missions,
}) {
  const { id } = useTelegram();

  const handleMissionCompleted = (task) => {
    async function setCompletedMission() {
      await axios.post(`${api}/set-user-completed-mission`, {
        userId: id,
        missionId: task.id,
      });
    }

    setCompletedMission();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "missions":
        return missions.map((mission) => (
          <div key={mission.category} className="mission-category">
            <h2>{mission.category}</h2>
            {mission.tasks.map((task) => (
              <MissionItem
                handleMissionCompleted={handleMissionCompleted}
                key={task.id}
                task={task}
              />
            ))}
          </div>
        ));
      case "achievements":
        return completedMissions.map((mission) => (
          <div key={mission.category} className="mission-category">
            <h2>{mission.category}</h2>
            {mission.tasks.map((task) => (
              <MissionItem
                handleMissionCompleted={handleMissionCompleted}
                key={task.id}
                task={task}
              />
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
