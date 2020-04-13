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
					customCss: '/css/homePage.css',
					novedades: results[0],
					// genres: results[1]
					// tracklist: tracklist,
				})
			}).catch(error => res.send(error));
	},
};

module.exports = mainController;