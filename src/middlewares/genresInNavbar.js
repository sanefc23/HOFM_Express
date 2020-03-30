const db = require('../database/models');
const Genres = db.genres;

module.exports = async (req, res, next) => {
	const genres = await Genres.findAll();
	res.locals.genres = genres;
	next();
}