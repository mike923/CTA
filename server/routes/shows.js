const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send("you've hit GET /shows route")
});

router.get('/:id', (req, res, next) => {
    res.send(`you've hit GET /shows/${req.params.id} route`)
});

router.get('/genres/:genre_id', (req, res, next) => {
    res.send(`you've hit GET /shows/genres/${req.params.genre_id} route`)
});

router.get('/user/:user_id', (req, res, next) => {
    res.send(`you've hit GET /shows/user/${req.params.user_id} route`)
});

router.post('/', (req, res, next) => {
    res.send("you've hit POST /shows route")
});


module.exports = router;
