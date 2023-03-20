import "./App.css";
import Sidenav from "./Components/SideNav/Sidenav";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="flex bg-[#1D2123]">
        <div>
          <Sidenav />
        </div>
        <div className="flex-auto">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
