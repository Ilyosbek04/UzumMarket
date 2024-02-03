import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const loginCLick = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__wrapper">
      <div className="login__page">
        <h2>Username yoki email orqali kiring</h2>
        <form
          onClick={(e) => {
            loginCLick(e);
          }}
          className="inputs"
        >
          <input
            onChange={(e) => setEmailOrUsername(e.target.value)}
            value={emailOrUsername}
            type="text"
            placeholder="Email yoki username"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Parol"
            required
          />
          <button onClick={() => navigate("/")} className="link__enter">
            Kirish
          </button>
        </form>
        {/* <div className="checkbox__input">
          <input type="checkbox" />
          <p>Rmember me</p>
        </div> */}
        <button onClick={() => navigate("/")} className="link__home">
          Asosiy saxifaga otish
        </button>
      </div>
    </div>
  );
}
