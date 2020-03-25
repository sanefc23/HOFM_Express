const db = require('../database/models/');

const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;

const productsController = {
    renderAdd: (req, res) => {

        let artists = Artists.findAll({
            order: [['name', 'ASC']],
        });
        let genres = Genres.findAll({
            order: [['name', 'ASC']],
        });
        Promise
            .all([artists, genres])
            .then(results => {
                res.render('productAdd', {
                    customCss: '/css/productAdd.css',
                    artists: results[0],
                    genres: results[1],
                    // tracklist: tracklist,
                }).catch(error => res.send(error))
            });
    },

    store: (req, res, next) => {
        Albums
            .create({
                ...req.body,
                front_cover: `/images/albums/${req.files[0].filename}`,
                back_cover: `/images/albums/${req.files[1].filename}`,
            })
            .then(product => res.redirect('/products/all')).catch(error => res.send(error));
    },

    renderCart: (req, res) => {
        res.render('productCart', {
            customCss: '/css/productCart.css'
        });
    },

    renderDetail: (req, res) => {
        Albums
            .findByPk(req.params.id, {
                include: ['artist', 'genre']
            })
            .then(album => {
                return res.render('productDetail', {
                    customCss: '/css/prodDetail.css',
                    album: album
                });
            }).catch(error => res.send(error));
    },

    // /products/all debe ser una ruta solo accesible por el administrador

    showAll: (req, res) => {
        Albums
            .findAll({
                include: ['artist']
            })
            .then(allAlbums => {
                res.render('allProducts', {
                    customCss: '/css/homePage.css',
                    allProducts: allAlbums
                });
            }).catch(error => res.send(error));
    },

    renderEdit: (req, res) => {
        let artists = Artists.findAll({
            order: [['name', 'ASC']],
        });
        let genres = Genres.findAll({
            order: [['name', 'ASC']],
        });

        Promise
            .all([artists, genres])
            .then(results => {
                Albums
                    .findByPk(req.params.id, {
                        include: ['artist', 'genre']
                    })
                    .then(album => {
                        res.render('productEdit', {
                            customCss: '/css/productAdd.css',
                            album: album,
                            artists: results[0],
                            genres: results[1],
                            // tracklist: tracklist,
                        });
                    })
            }).catch(error => res.send(error));
    },

    update: function (req, res) {
        Albums
            .update({
                ...req.body,
                front_cover: `/images/albums/${req.files[0].filename}`,
                back_cover: `/images/albums/${req.files[1].filename}`,
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(product =>
                res.redirect(`/products/${req.params.id}`)
            ).catch(error => res.send(error));
    },

    destroy: (req, res) => {
        Albums
            .findByPk(req.params.id)
            .then(product => {
                product.destroy();
                return res.redirect('/products/all');
            })
            .catch(error => res.send(error));
    }
};

module.exports = productsController;