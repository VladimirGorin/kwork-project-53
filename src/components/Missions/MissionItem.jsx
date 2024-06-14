import React from "react";
import { Link } from "react-router-dom";

export default function MissionItem({ task }) {
  return (
    <Link to={task?.link || "#"} className="mission-item">
      <div className="mission-right__side">
        <div className="mission-right__side-icon">
          <img src={task.icon} alt={task.icon} />
        </div>
        <div className="mission-right__side-text">
          <span>{task.text}</span>
          <div className="points">
            <img src="/img/small-coin.png" alt="small-coin" />
            <span>+ {task.points.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="mission-left__side">
        <div className="mission-left__side-icon">
          <img src="/img/right-arrow.png" alt="right-arrow" />
        </div>
      </div>
    </Link>
  );
}
