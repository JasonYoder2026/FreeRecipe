const bcrypt = require('bcrypt');
const userRepository = require('../repositories/authRepository');

async function createUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await userRepository.getUserByEmail(email);
        if (existingUser) {
            console.log('Email already in use:', email);
            return res.status(409).json({ error: 'Email already in use' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await userRepository.createUser({ firstName, lastName, email, passwordHash });
        console.log('User created successfully:', newUser);

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createUser,
};