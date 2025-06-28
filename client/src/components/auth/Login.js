import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../../assets/style.css";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("✅ Login Successful!");
      console.log(userCredential.user);
    } catch (error) {
      alert("❌ Login Failed: " + error.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("✅ Google Login Successful!");
      console.log("Google Login User:", result.user);
    } catch (error) {
      alert("❌ Google Login Failed: " + error.message);
    }
  };

  return (
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field input-field" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword((v) => !v)}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: 18,
                color: "#8b8b8b",
                padding: 5,
              }}
            >
              <i
                className={`bx ${
                  showPassword ? "bx-show" : "bx-hide"
                } eye-icon`}
              />
            </span>
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
          </div>
          <div className="field button-field">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Don't have an account?{" "}
            <a
              href="#"
              className="link signup-link"
              onClick={(e) => {
                e.preventDefault();
                onSwitch();
              }}
            >
              Signup
            </a>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field google" onClick={handleGoogleLogin}>
          <img src="/images/google.png" alt="" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  );
};

export default Login;
