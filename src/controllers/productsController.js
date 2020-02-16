const fs = require('fs');
const db = require('../database/models/');
const productsDir = 'data/products.json';

const Albums = db.albums;
const Artists = db.artists;

// function bringProducts() {
//     let readProducts = fs.readFileSync(productsDir, 'utf-8');
//     let products = readProducts.length == 0 ? [] : JSON.parse(readProducts);
//     return products;
// }

function saveProducts(products) {
    fs.writeFileSync(productsDir, JSON.stringify(products, null, ' '));
}

function generateId() {
    let products = bringProducts();
    if (products.length == 0) {
        return 1;
    } else {
        let lastProduct = products[products.length - 1];
        return lastProduct.id + 1;
    }
};

let tracklist = [];

const productsController = {
    renderAdd: (req, res) => {
        Artists
            .findAll({
                order: [['name', 'ASC']],
            })
            .then(artists => res.render('productAdd', {
                customCss: '/css/productAdd.css',
                artists: artists,
                tracklist: tracklist,
            })).catch(error => res.send(error));
    },

    createProduct: (req, res, next) => {

        let track = req.body.track;

        let cd = req.body.precioCD != null ? true : false;
        let dvd = req.body.precioDVD != null ? true : false;
        let vinil = req.body.precioVinilo != null ? true : false;

        console.log(req);


        let album = {
            id: generateId(),
            title: req.body.title,
            artist: req.body.artist,
            format: req.body.format,
            price: req.body.price,
            frontCover: `/images/albums/${req.files[0].filename}`,
            backCover: `/images/albums/${req.files[1].filename}`,
            description: req.body.description,
            rating: req.body.rating,
            tracklist: [tracklist],
            stock: req.body.stock,
            sold: 0,
            released: req.body.released
        };

        let products = bringProducts();
        products.push(album);
        saveProducts(products);
        res.redirect('/products/all');
    },

    renderCart: (req, res) => {
        res.render('productCart', {
            customCss: '/css/productCart.css'
        });
    },

    renderDetail: (req, res) => {
        let products = bringProducts();

        let selectedProduct = products.filter(album => album.id == req.params.id ? album : null);

        res.render('productDetail', {
            customCss: '/css/prodDetail.css',
            album: selectedProduct[0]
        });
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