const db = require('../database/models/');

const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;



function getGenres(req, res, next) {
    let genres = Genres.findAll({
        order: [['name', 'ASC']],
    });
    Promise
        .all([genres])
        .then(results => {
            res.render('productAdd', {
                customCss: '/css/productAdd.css',
                genres: results,
            }).catch(error => res.send(error))
        });

    next();
}

module.exports = getGenres;