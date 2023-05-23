import { useState } from "react";
import "./App.css";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import SettingsContext from "./contexts/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <main>{showSettings ? <Settings /> : <Timer />}</main>
      </SettingsContext.Provider>
    </>
  );
}

export default App;
