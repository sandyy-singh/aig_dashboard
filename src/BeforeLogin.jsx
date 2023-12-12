import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const BeforeLogin = () => {
  return (
    <div className="">
      <Routes>
        <Route
          path="*"
          element={<h1 className="text-center">page not available</h1>}
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default BeforeLogin;
