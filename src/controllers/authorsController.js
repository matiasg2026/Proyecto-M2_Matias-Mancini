
import {
   getAllAuthors,
   getAuthorByIdService,
   createAuthorService,
   updateAuthorService,
   deleteAuthorService
   } from "../services/authorsService.js";


export const getAuthors = async (req, res, next) => {

  try {

    const authors = await getAllAuthors();

    res.json(authors);

  } catch (error) {

    next(error);

  }

};




export const getAuthorById = async (req, res, next) => {

  try {

    const { id } = req.params;

    const author = await getAuthorByIdService(id);

    if (!author) {

      return res.status(404).json({
        error: "Author no encontrado"
      });

    }

    res.json(author);

  } catch (error) {

    next(error);
  }
};


export const createAuthor = async (req, res, next) => {

  try {

    const { name, email, bio } = req.body;

 

   const author = await createAuthorService(
    name,
    email,
    bio
   );
    res.status(201).json(author);


  } catch (error) {


  if (error.code === "23505") {

      return res.status(400).json({
        error: "El email ya está registrado"
      });

    }


    
    next(error);


  }

};

export const updateAuthor = async (req, res, next) => {

  try {

    const { id } = req.params;
    const { name, email, bio } = req.body;

    

    const author = await updateAuthorService(
  id,
  name,
  email,
  bio
);

    if (!author) {

      return res.status(404).json({
        error: "Author no encontrado"
      });

    }

    res.status(200).json(author);

  } catch (error) {

    if (error.code === "23505") {

      return res.status(400).json({
        error: "El email ya está registrado"
      });

    }

    next(error);

  }

};

export const deleteAuthor = async (req, res, next) => {

  try {

    const { id } = req.params;

   const author = await deleteAuthorService(id);

    if (!author) {

      return res.status(404).json({
        error: "Author no encontrado"
      });

    }

    res.status(204).send();

  } catch (error) {

    next(error);

  }

};