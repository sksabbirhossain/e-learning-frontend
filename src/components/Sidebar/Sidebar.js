import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://e-learning-backend.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className={styles.sidebar}>
      {courses.map((items) => (
        <p key={items.id}>
          <NavLink to={`/courses/${items.id}`}>{items.name}</NavLink>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
