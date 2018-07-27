const express = require('express');

const projectModel = require('../data/helpers/projectModel');

const router = express.Router();

// GET Project

router.get('/', (req, res, next) => {
    projectModel
        .get()
        .then(users => {res.json(users)})
        .catch(error => {res.status(500).json({ error: 'Unable to retrieve project information!' })
    })
})

// GET Project ID

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    projectModel
        .get(id)
        .then(users => {res.json(users)})
        .catch(error => {res.status(500).json({ error: 'Unable to retrieve project information!' })
    })
})

// POST Project

router.post('/', (req, res, next) => {
    const userId = req.body;
    projectModel
        .insert(userId) 
        .then(response => { 
            projectModel
                .get()
                .then(users => {res.json(users)})
                .catch(error => {res.status(500).json({ error: 'Unable to post project information!' })})
        })
})

// PUT Project

router.put('./:id', (req, res, next) => {
    const { id } = req.params;
    const update = req.body;
    projectModel
        .update(id, update)
        .then(response => {
            projectModel
                .get()
                .then(users => {res.json(users);})
                .catch(error => {res.status(500).json({ error: 'Unable to update project information!' })})
        })
})

// DELETE Project

router.delete('./:id', (req, res, next) => {
    const { id } = req.params;
    projectModel
        .remove(id)
        .then(response => {
            projectModel
                .get()
                .then(users => {res.json(users)})
                .catch(error => {res.status(500).json({ error: 'Unable to delete project information!' })})
        })
        .catch(error => {res.status(500).json({ error: 'An error has occurred.' })})
})

module.exports = router;