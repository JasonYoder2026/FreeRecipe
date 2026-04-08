const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipeController');

router.post('/create', controller.createRecipe);

module.exports = router;