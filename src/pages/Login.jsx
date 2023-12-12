import React, { useState } from "react";
import Asset from "../img/Asset.png";
import { useUserContext } from "../ContextProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const context = useUserContext();
  const { user, setIsTocken } = context;
  const logInHandler = async () => {
    try {
      setLoading(true);
      if (email === user.email && password === user.password) {
        setIsTocken(true);
      } else {
        alert("details invalid");
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
    </div>
  );
};

export default Login;
