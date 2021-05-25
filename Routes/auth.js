const express = require('express');
const router = express.Router();

const authController = require('../Controllers/Auth');

router.get('/login', authController.login_page);

router.post('/login', authController.login_user);

module.exports = router;