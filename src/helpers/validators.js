export function validarNombre(nombre) {

  if (nombre === undefined || nombre === null) {
    return "El nombre es obligatorio";
  }

  if (typeof nombre !== "string") {
    return "El nombre debe ser un texto";
  }

  if (nombre.trim().length === 0) {
    return "El nombre no puede estar vacío";
  }

  return null;
}


export function validarEmail(email) {

  if (!email) {
    return "El email es obligatorio";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "El formato del email es inválido";
  }

  return null;
}

export function validarTitulo(title) {

  if (title === undefined || title === null) {
    return "El título es obligatorio";
  }

  if (typeof title !== "string") {
    return "El título debe ser un texto";
  }

  if (title.trim().length === 0) {
    return "El título no puede estar vacío";
  }

  return null;
}


export function validarContenido(content) {

  if (content === undefined || content === null) {
    return "El contenido es obligatorio";
  }

  if (typeof content !== "string") {
    return "El contenido debe ser un texto";
  }

  if (content.trim().length === 0) {
    return "El contenido no puede estar vacío";
  }

  return null;
}

export function validarAuthorId(author_id) {

  if (author_id === undefined || author_id === null) {
    return "El author_id es obligatorio";
  }

  if (!Number.isInteger(Number(author_id))) {
    return "El author_id debe ser un número entero";
  }

  return null;
}


