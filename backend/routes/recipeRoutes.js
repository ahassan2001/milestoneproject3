const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', recipeController.getRecipes);

router.get('/:id', recipeController.getRecipeById);

router.post('/', authenticateToken, recipeController.createRecipe);

router.put('/:id', authenticateToken, recipeController.updateRecipe);

router.delete('/:id', authenticateToken, recipeController.deleteRecipe);

module.exports = router;
