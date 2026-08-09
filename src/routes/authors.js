import express from "express";
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from "../controllers/authorsController.js";

import { validateAuthor } from "../middlewares/validateAuthor.js";



const router = express.Router();

router.get("/", getAuthors);

router.get("/:id", getAuthorById);

router.post("/", validateAuthor , createAuthor);

router.put("/:id", validateAuthor, updateAuthor);

router.delete("/:id", deleteAuthor);

export default router;