async function createRecipe(req, res) {
    try {
        const { title, description, ingredients, instructions } = req.body;
        const userId = req.user.id;

        if (!title || !description || !ingredients || !instructions) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const newRecipe = await recipeRepository.createRecipe({ title, description, ingredients, instructions, userId });
        console.log('Recipe created successfully:', newRecipe);
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }   
}

module.exports = {
    createRecipe,
};