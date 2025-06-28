import React from "react";

const Navbar = ({ onLogin, onSignup }) => {
  return (
    <nav
      style={{
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "0.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 24,
          color: "#4070f4",
          letterSpacing: 1,
        }}
      >
        PortfolioAI
      </div>
      <div>
        <button
          style={{
            marginRight: 12,
            padding: "8px 20px",
            background: "#4070f4",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onLogin}
        >
          Login
        </button>
        <button
          style={{
            padding: "8px 20px",
            background: "#fff",
            color: "#4070f4",
            border: "1px solid #4070f4",
            borderRadius: 6,
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onSignup}
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
