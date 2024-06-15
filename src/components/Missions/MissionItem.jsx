import React from "react";

export default function MissionItem({ task, handleMissionCompleted }) {
  return (
    <div onClick={() => {handleMissionCompleted(task)}} className="mission-item">
      <div className="mission-right__side">
        <div className="mission-right__side-icon">
          <img src={task.icon} alt={task.icon} />
        </div>
        <div className="mission-right__side-text">
          <span>{task.text}</span>
          <div className="points">
            <img src="/missions/img/small-coin.png" alt="small-coin" />
            <span>+ {task.points.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="mission-left__side">
        <div className="mission-left__side-icon">
          {task?.completed ? (
            <img src="/missions/img/completed.png" alt="completed" />
          ) : (
            <img src="/missions/img/right-arrow.png" alt="right-arrow" />
          )}
        </div>
      </div>
    </div>
  );
}
