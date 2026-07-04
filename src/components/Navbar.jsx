

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./Search";
import LoginModal from "./LoginModal";

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src="/images/cam.png"></img> */}
      </div>

      <h2>CampusHub.in</h2> 
      <SearchBox />

      <div className="menu">       

        <div className="nav-item dropdown-parent">
          Notices
          <div className="dropdown">
            <Link to="/menu">All Notices</Link>
            <Link to="/menu/latest">Latest</Link>
            <Link to="/menu/important">Important</Link>
          </div>
        </div>

        <div className="nav-item dropdown-parent">
          Jobs
          <div className="dropdown">
            <Link to="/account/pdf">Full Stack Developer </Link>
            <Link to="/account/pdf">Cyber Security </Link>
            <Link to="/account/pdf">UI/UX Design </Link>
            <Link to="/account/pdf">AI/ML Engineer </Link>
            <Link to="/account/pdf">Front-end Developer </Link>
            <Link to="/account/pdf">Back-end Developer </Link>
            <Link to="/account">Management</Link>
            <Link to="/account/subject">Finance</Link>
          </div>
        </div>

        <div className="nav-item dropdown-parent">
          Notes
          <div className="dropdown">
            <Link to="/account">All Notes</Link>
            <Link to="/account/subject">By Subject</Link>
            <Link to="/account/pdf">PDF Notes</Link>
          </div>
        </div>

        {user ? (
          <button className="login" onClick={handleLogout}>
            Logout</button>
        ) : (
          <button className="login" onClick={() => setShowModal(true)}>
            Login</button>
        )}

      </div>

      {showModal && (
        <LoginModal 
          closeModal={() => setShowModal(false)} 
          setUser={setUser}
        />
      )}

    </div>
  );
}