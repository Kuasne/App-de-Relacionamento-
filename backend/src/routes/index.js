const express = require('express');
const auth = require('../middleware/auth');
const { register, login } = require('../controllers/authController');
const { me, discovery } = require('../controllers/userController');
const { swipe, myMatches } = require('../controllers/swipeController');
const { reportUser } = require('../controllers/safetyController');

const router = express.Router();

router.get('/health', (_, res) => res.json({ ok: true }));
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/users/me', auth, me);
router.get('/users/discovery', auth, discovery);
router.post('/swipes', auth, swipe);
router.get('/matches', auth, myMatches);
router.post('/safety/report', auth, reportUser);

module.exports = router;
