import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import Missions from "../Missions/Missions";
import axios from "axios";

import { useTelegram } from "../../hooks/useTelegram";

export default function Main({ api }) {
  const { id } = useTelegram();
  const [activeTab, setActiveTab] = useState("missions");
  const [missions, setMissions] = useState([]);
  const [completedMissions, setCompletedMissions] = useState([]);

  useEffect(() => {
    try {
      async function getMissions(){
        const response = await axios.post(`${api}/get-missions`, { id });

        setMissions(response.data.missions)
        setCompletedMissions(response.data.completedMissions)
      }

      getMissions()

    } catch (error) {
      alert(error.message);
    }
  }, [activeTab, api, id]);

  return (
    <>
      <Header title={"Earn more Pushcoin"} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Missions
        completedMissions={completedMissions}
        api={api}
        missions={missions}
        activeTab={activeTab}
      />
    </>
  );
}
