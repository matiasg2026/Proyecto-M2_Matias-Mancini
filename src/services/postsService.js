import pool from "../db/db.js";


export const getAllPosts = async () => {

  const result = await pool.query(
    "SELECT * FROM posts"
  );

  return result.rows;

};

export const getPostByIdService = async (id) => {

  const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );

  return result.rows[0];

};

export const createPostService = async (
    author_id,
    title,
    content,
    published) => {

  const result = await pool.query(
    `
    INSERT INTO posts (author_id, title, content, published)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [author_id, title, content, published]
  );

  return result.rows[0];

};

export async function updatePostService(id,
    author_id,
    title,
    content,
    published) {

    const result = await pool.query(
        `
    UPDATE posts
    SET author_id = $1,
        title = $2,
        content = $3,
        published = $4
    WHERE id = $5
    RETURNING *
    `,
        [author_id, title, content, published, id]
    );

    return result.rows[0];

}

export const deletePostService = async (id) => {

  const result = await pool.query(
    `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];

};

export const authorExistsService = async (author_id) => {

  const result = await pool.query(
    "SELECT * FROM authors WHERE id = $1",
    [author_id]
  );

  return result.rows.length > 0;

};

export const getPostsByAuthorService = async (authorId) => {

const result = await pool.query(
`
SELECT
  posts.*,
  authors.name,
  authors.email
FROM posts
JOIN authors
  ON posts.author_id = authors.id
WHERE authors.id = $1
`,
[authorId]
);

return result.rows;

};

export const getPostsWithAuthorsService = async () => {

const result = await pool.query(
`
SELECT
  posts.id,
  posts.title,
  authors.name AS author
FROM posts
JOIN authors
  ON posts.author_id = authors.id
`
);

return result.rows;

};