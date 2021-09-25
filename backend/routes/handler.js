import express from "express";
const router = express.Router();
import { getAllCourses, getCourse } from "../controllers/courses.js";

router.get("/courses", getAllCourses);

router.get("/courses/:id", getCourse);

export default router;
