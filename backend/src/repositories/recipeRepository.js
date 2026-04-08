const pool = require('../db');

async function createRecipe({ title, description, ingredients, instructions, userId}) {
    const result = await pool.query(
        `INSERT INTO recipes (title, description, ingredients, instructions, user_id)
         VALUES ($1, $2, $3, $4, $5) RETURNING id, title, description, ingredients, instructions, user_id`,
        [title, description, ingredients, instructions, userId]
    );
    return result.rows[0];

}