const { db } = require('../utils/db');

function hasMutualLike(fromUserId, toUserId) {
  return db.swipes.some(
    (swipe) =>
      swipe.fromUserId === toUserId &&
      swipe.toUserId === fromUserId &&
      swipe.direction === 'right'
  );
}

function createMatch(userAId, userBId) {
  const existing = db.matches.find(
    (m) =>
      (m.userAId === userAId && m.userBId === userBId) ||
      (m.userAId === userBId && m.userBId === userAId)
  );

  if (existing) return existing;

  const match = {
    id: `${userAId}:${userBId}`,
    userAId,
    userBId,
    createdAt: new Date().toISOString()
  };

  db.matches.push(match);
  return match;
}

module.exports = { hasMutualLike, createMatch };
