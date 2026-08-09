import {
  validarAuthorId,
  validarTitulo,
  validarContenido
} from "../helpers/validators.js";


export const validatePost = (req, res, next) => {

  const { author_id, title, content } = req.body;


  const errorAuthorId = validarAuthorId(author_id);

  if (errorAuthorId) {

    return res.status(400).json({
      error: errorAuthorId
    });

  }


  const errorTitulo = validarTitulo(title);

  if (errorTitulo) {

    return res.status(400).json({
      error: errorTitulo
    });

  }


  const errorContenido = validarContenido(content);

  if (errorContenido) {

    return res.status(400).json({
      error: errorContenido
    });

  }


  next();

};