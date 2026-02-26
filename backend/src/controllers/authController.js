const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const { db, createUser } = require('../utils/db');

async function register(req, res) {
  const { email, password, name, age, bio, interests = [], location } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'email, password e name são obrigatórios.' });
  }

  const existing = db.users.find((u) => u.email === email);
  if (existing) {
    return res.status(409).json({ error: 'Email já cadastrado.' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ email, passwordHash, name, age, bio, interests, location });

  const token = jwt.sign({ sub: user.id, email: user.email }, env.jwtSecret, {
    expiresIn: '7d'
  });

  return res.status(201).json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      age: user.age,
      bio: user.bio,
      interests: user.interests,
      location: user.location
    }
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = db.users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  const token = jwt.sign({ sub: user.id, email: user.email }, env.jwtSecret, {
    expiresIn: '7d'
  });

  return res.json({ token });
}

module.exports = { register, login };
