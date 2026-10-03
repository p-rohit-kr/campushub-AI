
import "../styles/card.css";
import { Link } from "react-router-dom";
export function Card({ title, desc, exp, img , path}) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div 
        className="desc"
        style={{ backgroundImage: `url(${img})` }}
      >{desc}</div>


      <Link to={path} style={{ textDecoration: "none" }}>
      <div className="btn">{exp}</div>
      </Link>

    </div>
  );
}

