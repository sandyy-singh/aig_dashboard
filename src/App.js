import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Main from "./components/dashboard/Main";
import AddFarmer from "./components/dashboard/AddFarmer";
import Sidebar from "./components/dashboard/Sidebar";
import FarmerIdMain from "./components/addFarmer/FarmerIdMain";
import React, { useState, useEffect } from 'react';
import MobileUpperNav from "./components/dashboard/MobileUpperNav"


function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the width based on your mobile breakpoint
    };

    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="container-fluid fullscreen">
        <div className="row">
          {isMobile && (<div > <MobileUpperNav /></div>)}
          <div className={` col-2 ${isMobile ? 'mobile' : ''}`}  >
            <Sidebar />
          </div>
          <div className={` ${isMobile ? 'col-12' : 'col-10'}`}>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addfarmer" element={<AddFarmer />} />
              <Route path="/FarmerIdMain" element={<FarmerIdMain />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
