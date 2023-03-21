import "./App.css";
import Sidenav from "./Components/SideNav/Sidenav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Player from "./Components/Player/Player";

function App() {
  return (
    <>
      <div className="h-[100vh] relative ">
        <div className="flex bg-[#1D2123] z-200">
          <div>
            <Sidenav />
          </div>
          <div className="flex-auto">
            <Dashboard />
          </div>
        </div>
        <div className="absolute bottom-0 z-201 w-screen">
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
