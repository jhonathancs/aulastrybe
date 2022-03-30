const express = require('express');

// const Author = require('./models/Author');
const Book = require('./models/book');

const app = express();

/* ... */


app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});


app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(book);
});

// app.get('/books', async (req, res) => {
//   const books = await Book.getAll();

//   res.status(200).json(books);
// });

/* ... */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});