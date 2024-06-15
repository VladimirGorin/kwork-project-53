import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import "./App.css"
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";

function App() {
  const { tg, TMA } = useTelegram();

  const isDevMode = false
  const port = 8000

  const api = isDevMode ? `http://localhost:${port}` : "https://api.pushcoin.world"

  useEffect(() => {
    tg.ready()
  }, [tg, TMA])

  return (
    <div className="wrapper">
      <Routes>
        <Route path={"/"} element={< Navigate to={"missions"} />} />

        <Route path={"/missions"} element={< Main api={api} />} />
        <Route path={"/achievements"} element={< Main api={api} />} />

      </Routes>
    </div>
  );
}

export default App;
