const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: Number(process.env.PORT || 3000),
  jwtSecret: process.env.JWT_SECRET || 'development-secret',
  corsOrigin: process.env.CORS_ORIGIN || '*'
};
