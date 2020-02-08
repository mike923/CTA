const db = require('../config')

const getAllGenres = async () => await db.any('SELECT * FROM genres')

const getAllGenres = async (name) => await db.one(`
    INSERT INTO genres(genre_name)
    VALUES($/name/)
    RETURNING *
`, {name})


module.exports = {
    getAllGenres,
    addNewGenre,
}