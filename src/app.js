import express from "express";
import authorsRoutes from "./routes/authors.js";
import postsRoutes from "./routes/posts.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/authors", authorsRoutes);

app.use("/posts", postsRoutes);

app.use(errorHandler);

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});


export default app;