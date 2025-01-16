import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/loginauth/loginauthSlice";
import "./Login.css";
import Navbar from "../bars/Navbar";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      await dispatch(login(userData)).unwrap();
      navigate("/home");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="adjust">
        <div className="login-container-left">
          <figure className="login-stimulai-img">
            <img src="loginStimulai.png" alt="Stimulai" />
          </figure>
          <div className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            <h4 className="forgot-password">Forgot password?</h4>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
