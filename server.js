const actionModel = require('./data/helpers/actionModel');
const projectModel = require('./data/helpers/projectModel');

// Routes
// const actionRoutes = require('./routes/actionRoutes');
// const projectRoutes = require('./routes/projectRoutes');

const express = require('express');
const server = express();

errorHandler = (err, req, res, next) => { // error handler middleware to stop all errors
    if (error){
        if (error.errno) {
            res.status(400).json({ message: 'Please provide all the required information!' });
        } else {
            res.status(500).json({ error: 'An error has occured!'})
        }
    }
}

server.use(express.json());

// server.use('/api/projects', projectRoutes);

server.use(errorHandler);

server.listen(8000, () => console.log('API is running on port 8000'));