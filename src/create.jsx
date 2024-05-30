import React, { useState } from "react";
import LOGO from "./pictures/image.jpg";
import "./css/create1.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users",
        {
          name,
          email,
          password,
        }
      );
      if (response) {
        setError("Account Created Succesfully");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="main">
      <div className="body1">
        <div className="container1">
          <div className="sub-container">
          <Link to="/login">
            <button className="button1">
              <h2 className="h2">LOGIN</h2>{" "}
            </button></Link>

           
              <button className="button2">
                <h2 className="h3">REGISTER</h2>
              </button>
            
            <h1>Use your credentials to signup into account</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={signup}>
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Username"
                autoComplete="off"
                required
              />
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
                autoComplete="off"
                required
              />
              <br />
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input className="input" type="submit" value="SIGN IN" />
            </form>
          </div>
        </div>
        <div className="container2">
          <img className="img" src={LOGO} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Create;
