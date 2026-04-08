const express = require('express');
require('dotenv').config();
const App = express();
const pool = require('./src/db');
const routes = require('./src/routes/index');
const cors = require('cors');
App.use(cors());

App.use(express.json());
App.use('/api', routes);

const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database successfully!');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
}

App.get('/', (req, res) => {
    res.send('Hello World!');
});


App.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});