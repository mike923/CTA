const db = require('../config')

const getAllShows = async () => await db.any('SELECT * FROM shows')

const getShowByID = async (id) => await db.one('SELECT * FROM shows WHERE id = $1', [id])

const addNewShow = async (show) => await db.one(`
    INSERT INTO shows(title, img_url, user_id, genre_id)
    VALUES($/title/, $/img_url/, $/user_id/, $/genre_id/)
    RETURNING *
`, show)

const getShowByGenre = async (id) => await db.one('SELECT * FROM shows WHERE genre_id = $1', [id])

const getShowByUser = async (id) => await db.any('SELECT * FROM shows WHERE user_id = $1', [id])



module.exports = {
    getAllShows,
    getShowByID,
    addNewShow,
    getShowByGenre,
    getShowByUser,
}