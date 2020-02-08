const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../db/queries/users')
const { requireLoginMid } = require('../auth/helpers')


router.get('/', requireLoginMid, async (req, res, next) => {
    try {
        let users = await getAllUsers()
        res.json({
            payload: users,
            msg: 'Retrieved all users',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed retrieving all users',
            err: true
        })
    }
});

router.get('/:id', (req, res, next) => {
    res.send(`you've hit GET /users/${req.params.id} route`)
})

router.post('/', (req, res, next) => {
    res.send(`you've hit POST /users route`)
})

module.exports = router;
