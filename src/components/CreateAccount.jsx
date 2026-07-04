import { useState } from "react";
import "../styles/CreateAccount.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function CreateAccount({ setUser, closeModal }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    if (form.name && form.email && form.password) {
      const { confirmPassword, ...userData } = form;

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      closeModal();
    }
  };
  return (
  <div className="overlay" onClick={closeModal}>
    <div className="modal-box modern-modal" onClick={(e) => e.stopPropagation()}>
      
      <button
        type="button"
        className="close-btn"
        onClick={closeModal}
      >
        ✕
      </button>

       

      <div className="modal-right">
        <h2>Create Account</h2>
        <span className="subtitle">
          Fill in the details to get started
        </span>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {error && (
            <p className="error-msg">{error}</p>
          )}

          <button type="submit" className="submit-btn">
            Create Account
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

            <div className="social-buttons">
        <button type="button">
          <FcGoogle size={20} />
          <span>Google</span>
        </button>

        <button type="button">
          <FaApple size={20} />
          <span>Apple</span>
        </button>
      </div>
          <p className="signin-text">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
);
}