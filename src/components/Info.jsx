import "../styles/Info.css";
export default function Info() {
    return (
      <div className="info">
        <div className="details">
          <h1>💼 Your Gateway to Academic & Career Success</h1>
          <p>✔️Stay updated with the latest important updates.</p>
          <p>✔️Access well-organized study materials anytime, anywhere.</p>
          <p>✔️Discover job and internship opportunities tailored for you.</p>
          <p>✔️Get assignment updates and submission details on time.</p>
          <p>✔️Stay informed about upcoming college events and activities.</p>
          <p>✔️ Track placement drives and prepare for your career journey.</p>
          <a 
          href="https://www.linkedin.com/in/rohiitkumar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-btn"
        >connect to LinkedIn
        </a>       
        </div>
        <div className="image">
            <img src="/images/cmps.png" alt="picture"></img>
        </div>  
      </div>
    );
  }