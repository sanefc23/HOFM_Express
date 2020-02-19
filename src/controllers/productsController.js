const fs = require('fs');
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
                // artists_id: req.body.artists_id,
                // title: req.body.title,
                // description: req.body.description,
                // genre_id: req.body.genre_id,
                // rating: req.body.rating,
                // release_date: req.body.release_date
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


    // TERMINAR ESTO

    // renderEdit: (req, res) => {
    //     let products = bringProducts();
    //     res.render('productEdit', {
    //         customCss: '/css/productAdd.css',
    //         album: products.id(req.params.id)
    //     });
    // },

    // edit: function (req, res) {
    //     let products = bringProducts();
    //     var finalProducts = products.filter(function (album) {
    //         return album.id != req.params.id;
    //     });
    //     saveProducts(finalProducts);
    //     res.redirect('/products/all');
    // },

    // HASTA ACA

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