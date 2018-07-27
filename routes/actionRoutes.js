const express = require('express');

const actionModel = require('../data/helpers/actionModel');

const router = express.Router();

// GET Action

router.get('/', (req, res, next) => {
    actionModel
        .get()
        .then(users => {res.json(users)})
        .catch(error => {res.status(500).json({ error: 'Unable to retrieve project information!' })
    })
})


// GET Action Id

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    actionModel
        .get(id)
        .then(users => {res.json(users)})
        .catch(error => {res.status(500).json({ error: 'Unable to retrieve action.' })})
})

// POST Action

router.post('/', (req, res, next) => {
    const userId = req.body;
    actionModel
        .insert(userId)
        .then(response => {
            actionModel
                .get()
                .then(users => {res.json(users)})
                .catch(error => {res.status(500).json({ error: 'Unable to post action.' })})
        })
        .catch(error => {res.status(500).json({ error: 'An error has occurred.' })})
})

// PUT Action

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const update = req.body;
    actionModel
        .update(id, update)
        .then(response => {
            actionModel
                .get()
                .then(users => {res.json(users)})
                .catch(error => {res.status(500).json({ error: 'Unable to update action.' })})
        })
        .catch(error => {res.status(500).json({ error: 'An error occurred.' })})
})

// DELETE action

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    actionModel
        .remove(id)
        .then(response => {
            actionModel
                .get()
                .then(users => {res.json(users)})
                .catch(error => {res.status(500).json({ error: 'Unable to delete action.' })})
        })
        .catch(error => {res.status(500).json({ error: 'An error has occurred.' })})
})

module.exports = router;