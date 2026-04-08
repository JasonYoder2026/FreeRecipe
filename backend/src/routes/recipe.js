const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipeController');
const authMiddleware = require('../middleware/auth');

router.post('/create', authMiddleware.authMiddleware, controller.createRecipe);

module.exports = router;