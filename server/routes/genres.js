const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send("you've hit GET /genres route")
});

router.post('/', (req, res, next) => {
    res.send("you've hit POST /genres route")
});


module.exports = router;
