import { useState } from "react";
import "../styles/LoginModal.css";

export default function LoginModal({ closeModal, setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.email && form.password) {
      localStorage.setItem("user", JSON.stringify(form));
      setUser(form);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Enter UserName" onChange={handleChange} />
          <br /><br />

          <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
          <br /><br />

          <button type="submit">Login</button>
        </form>

        <button className="close-btn" onClick={closeModal}>X</button>
      </div>
    </div>
  );
}