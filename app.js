const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const databaseConfig = require('./config/database');
// Init express
const app = express();

// Middlewares
app.use(cors())
app.use(express.json());

module.exports = app;