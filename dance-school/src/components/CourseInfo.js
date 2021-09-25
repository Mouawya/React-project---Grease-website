import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import { Link } from "react-router-dom";

const CourseInfo = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(`/courses/${id}`);
      const data = await response.json();
      setCourseInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  if (courseInfo) {
    return (
      <>
        <div className="course-info-container">
          <div class="course-info">
            <div class="course-info-title">{courseInfo.title}</div>
            <div class="course-info-price">
              {courseInfo.price}
              <span>per course</span>
            </div>
            <div class="lines">
              <p class="line">Starts: {courseInfo.start}</p>
              <p class="line">Ends: {courseInfo.end}</p>
              <p class="line">Lessons: {courseInfo.lessons}</p>
            </div>
            <Link to="/registration">
              <button>Register</button>
            </Link>
          </div>
          <div>
            <p className="availability">Availability</p>
            <Chart
              availability={courseInfo.available}
              reserved={courseInfo.reserved}
            />
          </div>
        </div>
      </>
    );
  }
};

export default CourseInfo;
