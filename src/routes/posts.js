import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostsByAuthor,
  getPostsWithAuthors
} from "../controllers/postsController.js";

import { validatePost } from "../middlewares/validatePost.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/authors", getPostsWithAuthors);

router.get("/author/:authorId", getPostsByAuthor);

router.get("/:id", getPostById);

router.post("/", validatePost, createPost);

router.put("/:id", validatePost, updatePost);

router.delete("/:id", deletePost);

export default router;