const { db } = require('../utils/db');
const { hasMutualLike, createMatch } = require('../services/matchService');

function swipe(req, res) {
  const fromUserId = req.user.sub;
  const { toUserId, direction } = req.body;

  if (!toUserId || !['left', 'right'].includes(direction)) {
    return res.status(400).json({ error: 'toUserId e direction (left/right) são obrigatórios.' });
  }

  db.swipes.push({
    fromUserId,
    toUserId,
    direction,
    createdAt: new Date().toISOString()
  });

  if (direction === 'right' && hasMutualLike(fromUserId, toUserId)) {
    const match = createMatch(fromUserId, toUserId);
    return res.status(201).json({ match: true, data: match });
  }

  return res.status(201).json({ match: false });
}

function myMatches(req, res) {
  const userId = req.user.sub;
  const matches = db.matches.filter((m) => m.userAId === userId || m.userBId === userId);
  return res.json({ matches });
}

module.exports = { swipe, myMatches };
