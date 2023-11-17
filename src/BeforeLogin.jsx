import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const BeforeLogin = ({ logInHandler, isTocken, setIsTocken }) => {
  // const [isTocken,setIsTocken]=  useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {

  //  const checkLogin =()=>{
  //   setIsTocken(false)
  //  }

  //  checkLogin();

  // }, []);

  return (
    <div className="">
      <Routes>
        <Route
          path="*"
          element={<h1 className="text-center">page not available</h1>}
        />
        <Route
          path="/"
          element={
            <Login
              logInHandler={logInHandler}
              isTocken={isTocken}
              setIsTocken={setIsTocken}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default BeforeLogin;
