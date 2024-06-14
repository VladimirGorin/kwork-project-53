import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'
import Missions from "../Missions/Missions"

export default function Main({completedMissions, missions}) {
  const [activeTab, setActiveTab] = useState("missions");

  useEffect(() => {
    console.log("activeTab")
    // Here request to server to get data by user
  }, [activeTab])

  return (
    <>
      <Header title={"Earn more Pushcoin"} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Missions completedMissions={completedMissions} missions={missions}  activeTab={activeTab} />
    </>
  )
}
