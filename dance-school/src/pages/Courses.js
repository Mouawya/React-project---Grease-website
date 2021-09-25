import React, { useContext } from "react";
import { CoursesContext } from "../CoursesContext";
import { Link } from "react-router-dom";

const Courses = () => {
  const value = useContext(CoursesContext);

  return (
    <div className="courses">
      {value.map((course) => (
        <div className="course-card" key={course.id}>
          <img
            src={require(`../images/${course.title}.jpg`).default}
            alt="dancers"
            width={300}
            height={300}
          />
          <Link to={`/courses/${course.id}`}>
            <h2 className="course-title">{course.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
