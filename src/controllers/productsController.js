const db = require('../database/models/');

const Albums = db.albums;
const Artists = db.artists;
const Genres = db.genres;
const Songs = db.songs;

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

    //--- Edit Product View (Admin only) ---
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

    //--- Process Edit Product (Admin only) ---
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

    //--- Process Delete Product (Admin only) ---
    destroy: (req, res) => {
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
    },

    // --- Cart ---
    renderCart: (req, res) => {
        if (req.cookies.userCart != undefined) {
            let cartContentCookie = JSON.parse(req.cookies.userCart);
            Albums
                .findAll({
                    include: ['artist'],
                    where: { id: cartContentCookie }
                })
                .then(allAlbums => {
                    res.render('productCart', {
                        customCss: '/css/productCart.css',
                        albums: allAlbums,
                    });
                }).catch(error => res.send(error));
        } else {
            res.send('Cart is empty');
        }
    },

    addToCartDetail: (req, res) => {
        if (req.cookies.userCart != undefined) {
            let cartContentCookie = JSON.parse(req.cookies.userCart);  // Parse from json to push new item
            cartContentCookie.push(req.body.item); // Le metés a ese array que recuperaste el contenido nuevo
            console.log(cartContentCookie)
            res.cookie('userCart', JSON.stringify(cartContentCookie), { maxAge: 60000 * 100 }); // Volvés a setear la cookie
        } else {
            let cartContentCookie = [req.body.item]
            res.cookie('userCart', JSON.stringify(cartContentCookie), { maxAge: 60000 * 100 }); // Seteo la cookie para que nunca mas sea undefined
            console.log(cartContentCookie)
        }
        res.redirect('/');
    },

    carritoBorrar: (req, res) => {
        Albums
            .findAll({
                include: ['artist']
            })
            .then(allAlbums => {
                return res.render('products/productCart', {
                    albums: allAlbums,
                    CartCookie
                })
            })
            .catch(error => res.send(error));

    }
};

module.exports = productsController;