import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("POST /authors", () => {

  it("debería rechazar un author sin nombre", async () => {

    const response = await request(app)
      .post("/authors")
      .send({
        email: "test@test.com",
        bio: "Autor de prueba"
      });

    expect(response.statusCode).toBe(400);

    expect(response.body).toEqual({
      error: "El nombre es obligatorio"
    });

  });

  it("debería rechazar un email inválido", async () => {

    const response = await request(app)
      .post("/authors")
      .send({
        name: "Autor de prueba",
        email: "email-invalido",
        bio: "Autor de prueba"
      });

    expect(response.statusCode).toBe(400);

    expect(response.body).toEqual({
      error: "El formato del email es inválido"
    });

  });

  it("debería rechazar un email duplicado", async () => {

    const response = await request(app)
      .post("/authors")
      .send({
        name: "Autor duplicado",
        email: "juan@email.com",
        bio: "Intentando usar un email existente"
      });

    expect(response.statusCode).toBe(400);

    expect(response.body).toEqual({
      error: "El email ya está registrado"
    });

  });

  it("debería crear un author correctamente", async () => {

    const response = await request(app)
      .post("/authors")
      .send({
        name: "Author Test Vitest",
        email: `vitest${Date.now()}@test.com`,
        bio: "Author creado mediante test"
      });

    expect(response.statusCode).toBe(201);

    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Author Test Vitest");
    expect(response.body.email).toContain("@test.com");

  });

});


describe("GET /authors", () => {

  it("debería obtener todos los authors", async () => {

    const response = await request(app)
      .get("/authors");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

  });

});


describe("GET /authors/:id", () => {

  it("debería obtener un author existente", async () => {

    const response = await request(app)
      .get("/authors/1");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");

  });

  it("debería devolver 404 si el author no existe", async () => {

    const response = await request(app)
      .get("/authors/99999");

    expect(response.statusCode).toBe(404);

    expect(response.body).toEqual({
      error: "Author no encontrado"
    });

  });

});


describe("DELETE /authors/:id", () => {

  it("debería eliminar un author correctamente", async () => {

    const author = await request(app)
      .post("/authors")
      .send({
        name: "Author para eliminar",
        email: `delete${Date.now()}@test.com`,
        bio: "Author creado para probar DELETE"
      });

    expect(author.statusCode).toBe(201);

    const response = await request(app)
      .delete(`/authors/${author.body.id}`);

    expect(response.statusCode).toBe(204);

  });

});
