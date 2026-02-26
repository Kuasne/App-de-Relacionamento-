const { db } = require('../utils/db');

function me(req, res) {
  const user = db.users.find((u) => u.id === req.user.sub);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  return res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    age: user.age,
    bio: user.bio,
    interests: user.interests,
    location: user.location
  });
}

function discovery(req, res) {
  const currentUserId = req.user.sub;
  const candidates = db.users
    .filter((u) => u.id !== currentUserId)
    .map(({ passwordHash, ...safeUser }) => safeUser)
    .slice(0, 20);

  return res.json({ candidates });
}

module.exports = { me, discovery };
