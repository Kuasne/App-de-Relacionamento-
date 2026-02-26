const { db } = require('../utils/db');

function reportUser(req, res) {
  const reporterId = req.user.sub;
  const { reportedUserId, reason } = req.body;

  if (!reportedUserId || !reason) {
    return res.status(400).json({ error: 'reportedUserId e reason são obrigatórios.' });
  }

  db.reports.push({
    id: `${reporterId}:${reportedUserId}:${Date.now()}`,
    reporterId,
    reportedUserId,
    reason,
    createdAt: new Date().toISOString()
  });

  return res.status(201).json({ ok: true });
}

module.exports = { reportUser };
