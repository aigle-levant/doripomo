import { type Response } from "express";
import {
  getAllSyllabus,
  getSyllabusOfTopic,
  createSyllabus,
} from "../services/syllabus.services.js";
import { type AuthRequest } from "../middleware/auth.middleware.js";

// get ALL syllabus
export async function displaySyllabus(req: AuthRequest, res: Response) {
  try {
    const userId = (req.auth as { sub: string }).sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized." });

    const syllabi = await getAllSyllabus(userId);
    res.json(syllabi);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      details: err instanceof Error ? err.message : err,
    });
  }
}

// get ALL syllabus after clicking a topic btn
export async function displaySyllabusInTopic(req: AuthRequest, res: Response) {
  try {
    const userId = req.auth?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized." });

    const { topic } = req.params;
    const title = topic || "";
    const syllabi = await getSyllabusOfTopic(userId, title);

    if (!syllabi) {
      return res.status(404).json({ error: "Syllabus not found" });
    }
    res.json(syllabi);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      details: err instanceof Error ? err.message : err,
    });
  }
}

// create custom syllabus
export async function createCustomSyllabus(req: AuthRequest, res: Response) {
  try {
    const userId = req.auth?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized." });

    if (!req.body || !req.body.title) {
      return res.status(400).json({ message: "Syllabus must have a title." });
    }

    const syllabusData = {
      ...req.body,
      userId,
    };

    const data = await createSyllabus(syllabusData);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      details: err instanceof Error ? err.message : err,
    });
  }
}
