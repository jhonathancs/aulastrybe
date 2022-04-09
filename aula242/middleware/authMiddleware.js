const jwt = require('jsonwebtoken');

const SECRET = 'outrotokendiferente2';

const authMiddleware = (req, res, next) => {
  const { authorization: token } = req.headers;

  if(!token)
    return res.status(404).json({ message: 'Token is missing!'})

  try {
    var decoded = jwt.verify(token, SECRET);
    console.log({ decoded });

    req.user = decoded;

    next();
  } catch(err) {
    return res.status(401).json({ message: 'Not Authorized!!!'})
  }

  // if (user.token !== token) {
  //   return res.status(401).json({ message: 'Not Authorized!!!'})
  // }

  // req.user = user;

  // next();
}

module.exports = authMiddleware;