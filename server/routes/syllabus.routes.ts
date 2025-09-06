import { authenticateToken } from "../middleware/auth.middleware.js";
import { Router } from "express";
import {
  displaySyllabus,
  displaySyllabusInTopic,
  createCustomSyllabus,
} from "../controllers/syllabus.controller.js";

export const syllabusRouter = Router();

// default route -> /api/syllabus
// get all subjects
syllabusRouter.get("/", authenticateToken, displaySyllabus);
// get filtered subject based on topic
syllabusRouter.get("/:title", authenticateToken, displaySyllabusInTopic);
// create custom syllabus
syllabusRouter.put("/", authenticateToken, createCustomSyllabus);
