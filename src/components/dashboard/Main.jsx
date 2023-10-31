import React from "react";
import "./Main.scss";
import LineChart from "./LineChart";
import AreaCovered from "./AreaCovered";
import TotalNumber from "./TotalNumber";
import TotalArea  from "./TotalArea";
import StatusOperation from "./StatusOperation";

const Main = () => {
  return (
    <div className="conatiner-fluid main conatiner-main">
      <div className="row content">
        <div className="col-md-4 ">
          <div className="box"><TotalNumber /></div>
        </div>
        <div className="col-md-4 ">
          <div className="box"><TotalArea /></div>
        </div>
        <div className="col-md-4 ">
          <div className="box"> <AreaCovered /></div>
        </div>
        <div className="col-md-6">
          <div className="states">
            <StatusOperation/>
          </div> 
        </div>
        <div className="col-md-6">
          <div className="states chartt">
            <LineChart />
          </div>
          {/*
            <div className="row">
              <div className="col-12">
                <div className="Growth1"></div>
              </div>
              <div className="col-md-4">
                <div className="Growth2"></div>
              </div>
              <div className="col-md-4">
                <div className="Growth3"></div>
              </div>
              <div className="col-md-4">
                <div className="Growth4"></div>
              </div>
            </div>
         */}
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col ">
              <div className=" chats"></div>
            </div>

          </div>
        </div>
        <div className="col-md-8">
          <div className=" chats"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
