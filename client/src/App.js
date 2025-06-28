import React, { useState } from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = () => {
    setShowSignup(false);
    setShowAuth(true);
  };
  const handleSignup = () => {
    setShowSignup(true);
    setShowAuth(true);
  };
  const handleCloseAuth = () => setShowAuth(false);

  return (
    <>
      <Navbar onLogin={handleLogin} onSignup={handleSignup} />
      <div style={{ height: 64 }} /> {/* Spacer for navbar */}
      <div className="container forms" style={{ minHeight: "100vh" }}>
        {showAuth ? (
          showSignup ? (
            <Signup onSwitch={() => setShowSignup(false)} />
          ) : (
            <Login onSwitch={() => setShowSignup(true)} />
          )
        ) : (
          <div
            style={{
              color: "#fff",
              fontSize: 32,
              fontWeight: 600,
              margin: "auto",
            }}
          >
            Welcome to PortfolioAI
          </div>
        )}
      </div>
    </>
  );
}

export default App;
