const db = require('../database/models/');

const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;

const mainController = {

	root: (req, res) => {
		Albums
			.findAll({
				include: ['artist']
			})
			.then(albums => {
				res.render('homePage', {
					customCss: '/css/homePage.css',
					novedades: albums
				});
			}).catch(error => res.send(error));
	},
};

module.exports = mainController;