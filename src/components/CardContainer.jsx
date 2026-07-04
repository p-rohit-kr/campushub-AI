

import { Card } from "./Card";
export function CardContainer({ open }) {
  const data = [
    { id: 1, title: "Upcoming Events", desc: "Desc 1", exp:
     "View All Events", img:"/images/seminar.png",path:"/event"},
    { id: 2, title: "Internship Opportunities", desc: "Desc 2", exp:
     "Browse Internship", img:"/images/intern.png",path:"/intern"},
    { id: 3, title: "Job Offers", desc: "Desc 3", exp:
     "Explore Jobs", img:"/images/job.png", path:"http://localhost:5173/"},
  ];

  return (
    <div className={open ? "container shift" : "container"}>
      <div className="cards">
      {data.map((n) => (
          <Card 
            key={n.id}
            title={n.title}  
            exp={n.exp} 
            img={n.img} 
            path={n.path}
          /> 
      ))}
      </div>
    </div>
  );
}