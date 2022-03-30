const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getById = async (id) => {
  const query = 'SELECT * FROM books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
//entender porq desse [0] ai
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
};