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
  const [showSignup, setShowSignup] = useState(true); 

 const sendMessage = async () => {

  const response = await fetch(
    "http://localhost:5000/api/chat",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: "Hello AI",
      }),
    }
  );

  const data = await response.json();

  console.log(data);
};


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
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



