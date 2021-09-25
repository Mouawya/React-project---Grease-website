import React, { useState, useEffect, createContext } from "react";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await fetch(`/courses`);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};
