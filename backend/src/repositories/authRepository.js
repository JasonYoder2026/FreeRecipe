const pool = require('../db');

async function createUser({ firstName, lastName, email, passwordHash }) {
    const result = await pool.query(
        `INSERT INTO users (first_name, last_name, email, password_hash)
         VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email`,
        [firstName, lastName, email, passwordHash]
    );
    return result.rows[0];
}

async function getUserByEmail(email) {
    const result = await pool.query(
        `SELECT id, first_name, last_name, email, password_hash
         FROM users WHERE email = $1`, 
        [email]
    );
    return result.rows[0];
}

module.exports = {
    createUser,
    getUserByEmail
};