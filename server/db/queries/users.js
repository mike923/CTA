const db = require('../config')

const getAllUsers = async () => await db.any('SELECT id, username FROM users')

const addNewUser = async (user) => {
	const insertQuery = `
		INSERT INTO users(username, password_digest)
        VALUES($/username/, $/password/)
        RETURNING id, username
	`
	return await db.one(insertQuery, user)
}

const getUserByUsername = async (username) => await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])

module.exports = {
	getAllUsers,
	addNewUser,
	getUserByUsername
}
