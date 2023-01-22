import "./App.css";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import ScrollSection from "./components/ScrollSection";
import { Provider } from "react-redux";
import store from "./store";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div style={{ margin: "2px", padding: "2px" }}>
          <InfoSection />
        </div>
        <div
          className="grdDesign"
          style={{
            padding: "3%",
            // display: "flex",
            flexDirection: "row",
          }}
        >
            <ScrollSection />
          
          <div
          className="videoWrapper"
            style={{
              // position: "fixed",
              top: "15%",
              paddingTop: "4.5%",
              right: "2%",
            }}
          >
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
