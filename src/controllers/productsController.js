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

    createProduct: (req, res, next) => {

        console.log(req.body);

        Albums
            .create(req.body)
            .then(product => res.redirect('/products/all'));
    },

    renderCart: (req, res) => {
        res.render('productCart', {
            customCss: '/css/productCart.css'
        });
    },

    renderDetail: (req, res) => {
        Albums
            .findByPk(req.params.id)
            .then(album => {
                return res.render('productDetail', {
                    customCss: '/css/prodDetail.css',
                    album: album
                });
            }).catch(error => res.send(error));
    },

    // /products/all debe ser una ruta
    // solo accesible por el administrador
    // permite eliminar productos.

    showAll: (req, res) => {

        Albums
            .findAll()
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

    delete: function (req, res) {
        let products = bringProducts();
        var finalProducts = products.filter(function (album) {
            return album.id != req.params.id;
        });
        saveProducts(finalProducts);
        res.redirect('/products/all');
    }
};

module.exports = productsController;