import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Main from "./components/dashboard/Main";
import AddFarmer from "./components/dashboard/AddFarmer";
import Sidebar from "./components/dashboard/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid fullscreen">
        <div className="row">
          <div className="col-2  ">
            <Sidebar />
          </div>
          <div className="col-10 main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addfarmer" element={<AddFarmer />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
