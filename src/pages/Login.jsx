import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Asset from "../img/Asset.png";

const Login = ({ logInHandler, isTocken, setIsTocken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password }
      );
      console.log(data);
      if (data.status === 201) {
        navigate("/dashboard");
      }
      if (data.status === 40) {
        toast.error("Login Failed");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-5 pt-4 mb-4 mt-4 mt-sm-5 pb-0 loginParent">
          <div className="row d-flex justify-content-center align-items-center flex-column">
            <div className="col-4 mb-4 d-flex justify-content-center align-items-center logo">
              <img className="logo" src={Asset} alt="logo" />
            </div>
            <div className="col-8">
              <div className="row d-flex justify-content-center align-items-center flex-column">
                <input
                  className="form-control input "
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Admin login ID"
                />
                <input
                  className="form-control input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <p className="text-end mb-3">Forgot Password</p>
                <div className="col-10 d-flex justify-content-center align-items-center">
                  <button className="w-100 loginbtn" onClick={logInHandler}>
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
