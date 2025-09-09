import { type Response, type Request } from "express";
import {
  getAllSyllabus,
  getSyllabusOfTopic,
  createSyllabus,
} from "../services/syllabus.services.js";

// get ALL syllabus
export async function displaySyllabus(req: Request, res: Response) {
  try {
    const syllabi = await getAllSyllabus();
    res.json(syllabi);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
}

// get ALL syllabus after clicking a topic btn
export async function displaySyllabusInTopic(req: Request, res: Response) {
  try {
    const { topic } = req.params;
    const title = topic || "";
    const syllabi = await getSyllabusOfTopic(title);
    if (!syllabi) {
      return res.status(404).json({ error: "Syllabus not found" });
    }
    res.json(syllabi);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
}

// create custom syllabus
export async function createCustomSyllabus(req: Request, res: Response) {
  try {
    const data = await createSyllabus(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
}
