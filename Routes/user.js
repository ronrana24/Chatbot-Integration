const express = require('express');
const router = express.Router();

const userController = require('../Controllers/User');

router.get('/', userController.home_page);
router.get('/movies', userController.movie_api);


module.exports = router;