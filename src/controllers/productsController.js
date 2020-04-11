const db = require('../database/models/');

const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;
const Songs = db.songs;

const productsController = {
    renderAdd: (req, res) => {
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
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
        }
    },

    store: (req, res, next) => {
        console.log(req.body);
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
            Albums
                .create({
                    ...req.body,
                    front_cover: `/images/albums/${req.files[0].filename}`,
                    back_cover: `/images/albums/${req.files[1].filename}`,
                })
                .then(product => res.redirect('/products/all')).catch(error => res.send(error));
        }
    },

    renderDetail: (req, res) => {
        Albums
            .findByPk(req.params.id, {
                include: ['artist', 'genre']
            })
            .then(album => {
                Songs.findAll({ where: { album_id: req.params.id } }).then(tracklist => {
                    // Si la consulta trae un album
                    if (album) {
                        return res.render('productDetail', {
                            customCss: '/css/prodDetail.css',
                            album: album,
                            tracklist: tracklist
                        });
                    }
                    // De lo contrario rendereas un 404
                    return res.redirect('/not-found');
                }).catch(error => res.send(error));
            }).catch(error => res.send(error));
    },

    // --- Complete Catalog View (Admin only) ---
    showAll: (req, res) => {
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
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
        }
    },

    //--- Edit Product View (Admin only) ---
    renderEdit: (req, res) => {
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
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
        }
    },

    //--- Process Edit Product (Admin only) ---
    update: function (req, res) {
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
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
        }
    },

    //--- Process Delete Product (Admin only) ---
    destroy: (req, res) => {
        if (req.session.loggedUser == undefined) {
            return res.redirect('/denied-access');
        } else if (req.session.loggedUser.email == 'san.efc@gmail.com') {
            Songs
                .findAll({
                    where: { album_id: req.params.id }
                }).then(tracklist => {
                    tracklist.forEach(track => {
                        track.destroy();
                    });
                    Albums
                        .findByPk(req.params.id)
                        .then(product => {
                            product.destroy();
                            return res.redirect('/products/all');
                        })
                        .catch(error => res.send(error));
                }).catch(error => res.send(error));
        }
    },

    // --- Cart ---
    renderCart: (req, res) => {
        res.render('productCart', {
            customCss: '/css/productCart.css'
        });
    },

    // addToCart: (req, res) => {
    //     let serviceId = req.params.idProduct

    //     //Busco el servicio
    //     Services
    //     .findByPk(serviceId)
    //     .then(service => {
    //         //Armo la operacion a registrar
    //         let addItem = {
    //             userId: req.session.userId,
    //             serviceId: service.id,
    //             quantity: req.body.quantity,
    //             salePrice: service.price,
    //         };


    //         UsersServices
    //             .create(addItem)
    //             .then( item => {
    //                 //return res.send(item);
    //                 return res.redirect('/products/productCart');
    //         })
    //         .catch(error => {
    //             return res.send(error);
    //         })
    //     })
    //   },

    // productCart: (req, res) => {
    //     UsersServices
    //         .findAll({
    //             where: {
    //                 userId: req.session.userId
    //             },
    //             include: ['service', 'user']
    //         })
    //         .then(userCart => {
    //             //return res.send(userCart);
    //             return res.render('products/productCart', { userCart });


    //         })
    //     //
    // },
    // updateCart: (req, res) => {
    //     UsersServices
    //         .findByPk(req.params.idProduct)
    //         .then(item => {
    //             item.destroy();
    //             return res.redirect('/products/productCart');
    //         });

    // },
};

module.exports = productsController;