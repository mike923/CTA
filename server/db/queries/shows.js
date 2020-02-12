const db = require('../config')

const getAllShows = async () => await db.any(`
    SELECT title, img_url, genre_name,
        ARRAY_AGG (
            JSON_BUILD_OBJECT (
                'show_id', shows.id, 
                'user_id', users.id, 
                'username', username, 
                'avatar_url', avatar_url
            )
            ORDER BY shows.id
        ) viewers
    FROM shows
    JOIN genres 
    ON shows.genre_id = genres.id
    JOIN users 
    ON shows.user_id = users.id
    GROUP BY title, img_url, genre_name
`)

const getShowByID = async (id) => await db.one(`
    SELECT *, shows.id AS show_id
    FROM shows 
    JOIN genres
    ON shows.genre_id = genres.id
    WHERE shows.id = $1
`, [id])

const addNewShow = async (show) => await db.one(`
    INSERT INTO shows(title, img_url, user_id, genre_id)
    VALUES($/title/, $/img_url/, $/user_id/, $/genre_id/)
    RETURNING *
`, show)

const getShowByGenre = async (id) => await db.any(`
    SELECT *, shows.id AS show_id
    FROM shows 
    JOIN genres
    ON shows.genre_id = genres.id
    WHERE genre_id = $1
`, [id])

const getShowByUser = async (id) => await db.any(`
    SELECT *, shows.id AS show_id
    FROM shows 
    JOIN genres
    ON shows.genre_id = genres.id
    WHERE user_id = $1
`, [id])



module.exports = {
    getAllShows,
    getShowByID,
    addNewShow,
    getShowByGenre,
    getShowByUser,
}