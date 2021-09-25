import data from "../data.js";

export const getAllCourses = (req, res) => {
  res.status(200).json(data);
  res.end();
};

export const getCourse = (req, res) => {
  const id = req.params.id;
  console.log(id);
  data.map((course) => {
    if (course.id === id) {
      res.status(200).json(course);
      res.end();
    }
  });
};
