require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Create app server
const app = express();
app.use(express.json);

// Set routes
const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to database");
});

db.on('error', (error) => {
    console.log(error);
});