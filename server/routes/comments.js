const express = require('express');
const router = express.Router();
const { getCommentsByShow, addNewComment } = require('../db/queries/comments')

router.get('/show/:show_id', async (req, res, next) => {
    let comments = await getCommentsByShow(req.params.show_id)
    res.json({
        payload: comments,
        msg: `you've hit GET /comments/show/${req.params.show_id} route`,
        err: false
    })
});

router.post('/', (req, res, next) => {
    res.send("you've hit POST /comments route")
});


module.exports = router;
