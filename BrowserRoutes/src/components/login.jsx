import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ check, setchange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false); // Track login success
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("comes to login.jsx and handle login");

    if (check.current) {
      navigate('/dashboard', { replace: true });
    } else {
      if (username === 'Akhil' && password === '123') {
        check.current = true;
        setchange(true);
        setSuccess(true); // trigger navigation in useEffect
      } else {
        alert('Invalid credentials');
      }
    }
  };

  useEffect(() => {
    if (success && check.current) {
      navigate('/dashboard', { replace: true });
    }
  }, [success, check, navigate]);

  return (
    <div>
      <h1>Login</h1><br />
      <h2>The user name is Akhil and pass is 123</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mt-3 bg-blue-500 rounded-full pl-4 pr-4 py-2 text-white font-sans focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-3 bg-blue-500 rounded-full pl-4 pr-4 py-2 text-white font-sans focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      />
      <br />
      <button onClick={handleLogin} className="mt-10">Login</button>
    </div>
  );
}

export default Login;