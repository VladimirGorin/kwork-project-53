import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import "./App.css"

import { useEffect } from "react";

const completedMissions = [
  {
    category: "Achievements",
    tasks: [
      {
        id: 1,
        text: "Subscribe to the group in TG",
        points: 100000,
        icon: "/missions/img/telegram-icon.png",
        link: "vk.com",
        completed: true
      },
    ],
  }
];

const missions = [
  {
    category: "Daily",
    tasks: [
      {
        id: 2,
        text: "Subscribe to the group on VK",
        points: 100000,
        icon: "/missions/img/vk-icon.png",
        link: "vk.com",
        completed: false
      },
    ],
  },
  {
    category: "Telegram premium",
    tasks: [
      {
        id: 3,
        text: "Subscribe to YouTube channel",
        points: 100000,
        icon: "/missions/img/youtube-icon.png",
        link: "https://vk.com",
        completed: false
      },
    ],
  },
];

function App() {
  useEffect(() => {
    const fetchAppData = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const app = window.Telegram.WebApp;
        await app.ready();
        console.log(app)
      }
    }
    fetchAppData();
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route path={"/"} element={< Navigate to={"missions"} />} />

        <Route path={"/missions"} element={< Main completedMissions={completedMissions} missions={missions} />} />
        <Route path={"/achievements"} element={< Main completedMissions={completedMissions} missions={missions} />} />

      </Routes>
    </div>
  );
}

export default App;
