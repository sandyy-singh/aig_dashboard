import { createContext, useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [isTocken, setIsTocken] = useState(false);
  const navigate = useNavigate();
  const user = {
    email: "admin@gmail.com",
    password: "123456",
    // name: "Admin",
  };
  const logInHandler = () => {
    setIsTocken(true);
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ user, logInHandler, isTocken, setIsTocken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
