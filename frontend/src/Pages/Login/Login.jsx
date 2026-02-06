import { useState } from "react";
import api from "../../api/api";
import "./Login.css";

export default function Login({ onLogin, goSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return alert("Fill all fields");
    await api.post("/auth/login", { email, password });
    onLogin();
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p onClick={goSignup} className="link">
        Don’t have an account? Sign up
      </p>
    </div>
  );
}
