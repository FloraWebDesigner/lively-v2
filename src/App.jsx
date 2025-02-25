import Header from "./components/Header"
import City from "./components/City";
import RadioList from "./components/RadioList";
// import Audio from "./components/Audio";
import { LogContext } from "./components/Context/LogContext";
import { ScheduleContext } from "./components/Context/ScheduleContext";
import { CityContext } from "./components/Context/CityContext";
import { useState } from "react";
import RadioLogID from "./components/RadioLogID";
import "./app.css"

function App() {
  const [LogID, setLogID] = useState(null);
  const [ScheduleID, setScheduleID] = useState(null);
  const [CityID, setCityID] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div className="container my-1" style={{minHeight:'100vh'}}>
        <CityContext.Provider value={{ CityID, setCityID }}>
      <LogContext.Provider value={{ LogID, setLogID }}>
      <ScheduleContext.Provider value={{ ScheduleID, setScheduleID }}>
        <div className="d-flex flex-md-row align-items-md-start flex-column justify-content-center align-items-center" style={{columnGap:'2rem'}}>
          <div className="d-flex flex-column justify-content-center align-items-center my-5 radio-card py-4 shadow">
            <City className="text-center" />
            <Header className="text-center" isPlaying={isPlaying} />
            <RadioLogID className="text-center" setIsPlaying={setIsPlaying}/>
          </div>  
         
          <div className="p-0 mt-3">
            <RadioList />
          </div>
       
        </div>
        </ScheduleContext.Provider>
        </LogContext.Provider>
        </CityContext.Provider>
      </div>
    </>
  );
}

export default App;
