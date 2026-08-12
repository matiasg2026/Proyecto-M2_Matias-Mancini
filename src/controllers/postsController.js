
import { 
  getAllPosts,
  getPostByIdService,
  createPostService,
  updatePostService,
  deletePostService,
  authorExistsService,
  getPostsByAuthorService,
  getPostsWithAuthorsService
} from "../services/postsService.js";



export const getPosts = async (req, res, next) => {

  try {

    const posts = await getAllPosts();

res.json(posts);

  } catch (error) {
    
    next(error);
  }

};

export const getPostById = async (req, res, next) => {

  try {


     const { id } = req.params;

    const post = await getPostByIdService(id);

     if (!post) {

  return res.status(404).json({
    error: "Post no encontrado"
  });

    }

     res.json(post);

  } catch (error) {

    next(error);

  }
};

  

export const createPost = async (req, res, next) => {

  try {

    const { author_id, title, content, published } = req.body;

  

    const authorExists = await authorExistsService(author_id);

    if (!authorExists) {
       return res.status(404).json({
        error: "Author no encontrado"
  });
}
    

    const post = await createPostService(
     author_id,
     title,
     content,
     published
    );

     res.status(201).json(post);

  } catch (error) {

     next(error);

  }

};

export const updatePost = async (req, res, next) => {

  try {

    const { id } = req.params;
    const { author_id, title, content, published } = req.body;



    const authorExists = await authorExistsService(author_id);

    if (!authorExists) {
   return res.status(404).json({
     error: "Author no encontrado"
   });
  }

    const post = await updatePostService(
     id,
     author_id,
     title,
     content,
     published
    );

   if (!post) {
   return res.status(404).json({
    error: "Post no encontrado"
   });
 }

     res.status(200).json(post);

  } catch (error) {

    next(error);

  }

};

export const deletePost = async (req, res, next) => {

  try {

    const { id } = req.params;

    const post = await deletePostService(id);

   if (!post) {

   return res.status(404).json({
    error: "Post no encontrado"
   });

 }

    res.status(204).send();

  } catch (error) {

      next(error);
  }

};

export const getPostsByAuthor = async (req, res, next) => {

  try {

    const { authorId } = req.params;

    const authorExists = await authorExistsService(authorId);

    if (!authorExists) {
      return res.status(404).json({
        error: "Author no encontrado"
      });
    }

    const posts = await getPostsByAuthorService(authorId);

    res.json(posts);

  } catch (error) {

    next(error);

  }

};
export const getPostsWithAuthors = async (req, res, next) => {

  try {

    const posts = await getPostsWithAuthorsService();

    res.json(posts);

  } catch (error) {

    next(error);

  }

};