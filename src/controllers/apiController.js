const db = require('../database/models/');
const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;
const Users = db.users;

module.exports = {
    products: (req, res) => {
        Albums
            .findAll({
                attributes: [
                    'id',
                    'title',
                    'description',
                    'format',
                    'price',
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
    },

    productById: (req, res) => {
        Albums
            .findByPk(req.params.id)
            .then(album => {
                if (album) {
                    return res.status(302).json(album);
                } else {
                    return res.status(404).json({
                        msg: 'Album not found'
                    });
                }
            });
    },

    users: (req, res) => {
        Users.findAll().then(users => {
            return res.status(200).json({
                total_users: users.length,
                ...users
            });
        })
    }
}