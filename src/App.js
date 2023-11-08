import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Login from "./components/pages/Login";
// import Main from "./components/dashboard/Main";
// import AddFarmer from "./components/dashboard/AddFarmer";
// import Sidebar from "./components/dashboard/Sidebar";
// import FarmerIdMain from "./components/addFarmer/FarmerIdMain";
import React, { useState, useEffect } from "react";
// import MobileUpperNav from "./components/dashboard/MobileUpperNav";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";


function App() {
  const [isTocken,setIsTocken]=  useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
   const checkLogin =()=>{
    setIsTocken(true)
   }

   checkLogin();
 
  }, []);

  return (
      <div className="">
  {/* <div className="container-fluid fullscreen">
        <div className="row">
         {isMobile&& (<div > <MobileUpperNav /></div>)}
          <div className={` col-2 ${isMobile ? 'mobile' : ''}`}  >
            <Sidebar />
          </div>
          <div className={` ${isMobile ? 'col-12 ' : 'col-10'}`}>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addfarmer" element={<AddFarmer />} />
              <Route path="/FarmerIdMain" element={<FarmerIdMain />} />
              <Route path="*" element={(<h1 className="text-center">Page not found</h1>)} />

            </Routes>
          </div>
        </div>
      </div> */} 
      {isTocken ?<AfterLogin/>:<BeforeLogin /> }

    </div>
  );
}
export default App;
