import { useState } from "react";
import "../styles/CreateAccount.css";

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
    setError(""); // reset error
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 validation
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
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button type="button" className="close-btn" onClick={closeModal}>✕</button>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />

          <input type="email" name="email" placeholder="Email" onChange={handleChange} />

          <input type="password" name="password" placeholder="Password" onChange={handleChange} />

          {/* 🔥 new field */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {/* 🔥 error */}
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <button type="submit" className="submit-btn">Get Started</button>
        </form>

      </div>
    </div>
  );
}