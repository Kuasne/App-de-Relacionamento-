const { v4: uuid } = require('uuid');

const db = {
  users: [],
  swipes: [],
  matches: [],
  messages: [],
  reports: []
};

function createUser(payload) {
  const user = { id: uuid(), createdAt: new Date().toISOString(), ...payload };
  db.users.push(user);
  return user;
}

module.exports = { db, createUser };
