const db = require('../database/models/');
const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;

module.exports = {
    index: (req, res) => {
        Albums
            .findAll({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'front_cover',
                    'back_cover',
                    'rating',
                    'release_date',
                ],
                include: ['artist', 'genre']
            })
            .then(albums => {
                return res.status(200).json({
                    total_albums: albums.length,
                    ...albums
                });
            })
            .catch(error => res.json(error));
    }
}