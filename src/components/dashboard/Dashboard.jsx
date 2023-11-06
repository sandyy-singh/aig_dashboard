import React from "react";
import "./Dashboard.scss"
import Sidebar from "./Sidebar"
import Main from "./Main"
const Dashboard = () => {
  return (
    <div className="container-fluid fullscreen">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-12 main">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
