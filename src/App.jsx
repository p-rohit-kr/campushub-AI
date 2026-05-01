import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { CardContainer } from "./components/CardContainer";
import "./styles/style.css";
import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import CreateAccount from "./components/CreateAccount";

export default function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(true); // 🔥 AUTO OPEN

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      {/* 🔥 modal control */}
      {showSignup && (
        <CreateAccount 
          setUser={setUser} 
          closeModal={() => setShowSignup(false)} 
        />
      )}

      <Navbar />

      <div className="layout">
        <Sidebar open={open} setOpen={setOpen} />

        <div className={`main ${open ? "shift" : ""}`}>
          <Hero />
          <CardContainer open={open} />
        </div>
      </div>

      <Info />
      <Footer />
    </>
  );
}