const express = require('express');

// Importing modular routes
const notesRouter = require('./notes');
const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
