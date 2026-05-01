// import { useEffect, useState } from "react";
// import "../styles/Search.css";
// export default function SearchBox() {
//   const placeholders = [
//     "Search notes...",
//     "Find internships...",
//     "Search latest jobs...",
//     "Explore study materials..."
//   ];

//   const [placeholder, setPlaceholder] = useState(placeholders[0]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % placeholders.length);
//     }, 2000); 

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setPlaceholder(placeholders[index]);
//   }, [index]);

//   return (
//     <input
//       type="text"
//       placeholder={placeholder}
//       className="search-box"
//     />
//   );
// }



import { useEffect, useState } from "react";
import "../styles/Search.css";

export default function SearchBox() {
  const placeholders = [
    "Search notes...",
    "Find internships...",
    "Search latest jobs...",
    "Explore study materials..."
  ];

  // 🔥 Dummy data (tum baad me API se replace kar sakte ho)
  const data = [
    "MBA Notes",
    "BCA Syllabus",
    "MCA PYQ",
    "BBA Books",
    "Internships",
    "Jobs Update"
  ];

  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [index, setIndex] = useState(0);

  // 🔥 Added states (search ke liye)
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholder(placeholders[index]);
  }, [index]);

  // 🔥 Added search logic
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length <1) {
      setFiltered([]);
      return;
    }

    const result = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="search-box"
        value={search}
        onChange={handleChange}
      />

      {/* 🔥 Dropdown (optional UI) */}
      {filtered.length > 0 && (
        <ul className="dropdowns">
          {filtered.map((item, i) => (
            <li key={i} onClick={() => handleSelect(item)}>
            {item}
          </li>
          ))}
        </ul>
      )}
    </>
  );
}