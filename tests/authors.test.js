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