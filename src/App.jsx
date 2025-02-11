import "./App.css";
import Header from "./components/Header";
import City from "./components/City";
import RadioList from "./components/RadioList";
import Audio from "./components/Audio";

function App() {
  return (
    <>
      <div className="container my-1">
        <div className="d-flex flex-row justify-content-between" style={{columnGap:'2rem'}}>
          <div className="d-flex flex-column justify-content-evenly align-items-center me-1">
            <City className="text-center" />
            <Header className="text-center" />
            <Audio className="text-center" />
          </div>        
        <div className="p-2">
          <RadioList />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
