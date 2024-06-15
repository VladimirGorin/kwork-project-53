import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import Missions from "../Missions/Missions";
import axios from "axios";

import querystring from "querystring-es3";
import { useTelegram } from "../../hooks/useTelegram";

export default function Main({ api }) {
  const { TMA } = useTelegram();
  const [activeTab, setActiveTab] = useState("missions");
  const [missions, setMissions] = useState([]);
  const [completedMissions, setCompletedMissions] = useState([]);

  useEffect(() => {
    try {

      async function getMissions(){
        const decodedTMA = querystring.parse(TMA);

        if (!Object.keys(decodedTMA).length) {
          throw Error("Incorrect TMA");
        }

        const decodedUser = JSON.parse(decodedTMA.user)

        console.log(decodedUser)

        const response = axios.post(`${api}/get-missions`, { id: decodedTMA?.chatId });
        console.log((await response).data)
        setMissions((await response).data)
      }

      getMissions()

    } catch (error) {
      alert(error.message);
    }
  }, [activeTab, TMA, api]);

  return (
    <>
      <Header title={"Earn more Pushcoin"} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Missions
        completedMissions={completedMissions}
        missions={missions}
        activeTab={activeTab}
      />
    </>
  );
}
