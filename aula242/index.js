const express = require('express');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = UserModel.findByEmail(email);

  if(!user) 
    return res.status(404).json({ message: 'User not found!'})

  if(password !== user.password)
    return res.status(401).json({ message: 'Incorrect password!'})

  const token = jwt.sign({ id: user.id }, SECRET, { algorithm: 'HS256', expiresIn: '15min'});

  return res.status(200).json({ token })
});

app.get('/products', authMiddleware, async (req, res) => {
  const { id } = req.user;

  const products = await ProductModel.findProductsByUserId(id);

  return res.status(200).json(products);
});

app.get('/products/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findProductsById(id);

  return res.status(200).json(product);
});

app.listen(3001, () => console.log('Rodando na porta 3001'));