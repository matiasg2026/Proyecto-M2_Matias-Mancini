import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("POST /posts", () => {

  it("debería rechazar un post sin author_id", async () => {

    const response = await request(app)
      .post("/posts")
      .send({
        title: "Post de prueba",
        content: "Contenido del post",
        published: false
      });

    expect(response.statusCode).toBe(400);

    expect(response.body).toEqual({
      error: "El author_id es obligatorio"
    });

  });

   it("debería rechazar un post con título vacío", async () => {

  const response = await request(app)
    .post("/posts")
    .send({
      author_id: 1,
      title: "",
      content: "Contenido de prueba",
      published: false
    });

  expect(response.statusCode).toBe(400);

  expect(response.body).toEqual({
    error: "El título no puede estar vacío"
  });

});

it("debería rechazar un post con contenido vacío", async () => {

  const response = await request(app)
    .post("/posts")
    .send({
      author_id: 1,
      title: "Título de prueba",
      content: "",
      published: false
    });

  expect(response.statusCode).toBe(400);

  expect(response.body).toEqual({
    error: "El contenido no puede estar vacío"
  });

});

 it("debería crear un post correctamente", async () => {

  const response = await request(app)
    .post("/posts")
    .send({
      author_id: 1,
      title: "Post creado con Vitest",
      content: "Este post fue creado mediante un test automatizado.",
      published: false
    });

  expect(response.statusCode).toBe(201);

  expect(response.body).toHaveProperty("id");
  expect(response.body.author_id).toBe(1);
  expect(response.body.title).toBe("Post creado con Vitest");
  expect(response.body.content).toBe(
    "Este post fue creado mediante un test automatizado."
  );

});

});