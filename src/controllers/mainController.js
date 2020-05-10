const db = require('../database/models/');

const Albums = db.albums;
const Genres = db.genres;

const mainController = {

	root: (req, res) => {
		let albums = Albums.findAll({
			include: ['artist']
		});
		let genres = Genres.findAll({
			order: [['name', 'ASC']],
		});

		Promise
			.all([albums, genres])
			.then(results => {
				res.render('homePage', {
					novedades: results[0],
				})
			}).catch(error => res.send(error));
	},
};

module.exports = mainController;