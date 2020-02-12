const db = require('../config')

const getCommentsByShow = async (id) => await db.any(`
    SELECT * 
    FROM comments 
    JOIN users
    ON comments.user_id = users.id
    WHERE show_id = $1
`, [id])

const addNewComment = async (comment) => await db.one(`
    INSERT INTO comments(comment_body, user_id, show_id)
    VALUES($/comment_body/, $/user_id/, $/show_id/)
    RETURNING *
`, comment)

module.exports = {
    getCommentsByShow,
    addNewComment,
}