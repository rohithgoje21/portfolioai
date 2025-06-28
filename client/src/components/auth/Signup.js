import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../../assets/style.css";

const Signup = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("✅ Signup Successful!");
      console.log(userCredential.user);
    } catch (error) {
      alert("❌ Signup Failed: " + error.message);
    }
  };

  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("✅ Google Signup Successful!");
      console.log("Google Signup User:", result.user);
    } catch (error) {
      alert("❌ Google Signup Failed: " + error.message);
    }
  };

  return (
    <div className="form signup">
      <div className="form-content">
        <header>Signup</header>
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
              placeholder="Create password"
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
          <div className="field input-field" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
          <div className="field button-field">
            <button type="submit">Signup</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Already have an account?{" "}
            <a
              href="#"
              className="link login-link"
              onClick={(e) => {
                e.preventDefault();
                onSwitch();
              }}
            >
              Login
            </a>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field google" onClick={handleGoogleSignup}>
          <img src="/images/google.png" alt="" className="google-img" />
          <span>Signup with Google</span>
        </a>
      </div>
    </div>
  );
};

export default Signup;
