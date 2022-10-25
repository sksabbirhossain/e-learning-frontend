import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="sidebar">
      {courses.map((items) => (
        <p key={items.id}>
          <Link to={`/courses/${items.id}`}>{items.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
