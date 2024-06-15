import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-body">
        <div className="coin">
          <img src="/missions/missions/img/coin.png" alt="Pushcoin" />
        </div>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
