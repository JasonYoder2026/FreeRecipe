const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const recipeRoutes = require('./recipe');

router.use('/auth', authRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;