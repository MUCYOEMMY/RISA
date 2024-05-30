import LOGO from "./pictures/image.jpg";
import "./login1.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/auth",
        {
          email,
          password,
        }
      );
      if (response) {
        navigate("/home");
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("Invalid username or password.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="main">
      <div className="body1">
        <div className="container1">
          <div className="sub-container">
            <button className="button1">
              <h2 className="h2">LOGIN</h2>{" "}
            </button>

            <Link to="/create">
              <button className="button2">
                <h2 className="h3">REGISTER</h2>
              </button>
            </Link>
            <h1>Use your credentials to login into account</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={login}>
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
};

export default Login;
