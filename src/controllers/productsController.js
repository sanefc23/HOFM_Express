const fs = require('fs');

const productsDir = 'data/products.json';

// Connection to Database
// let db = require('../database/models');
// let sequelize = db.sequelize;

function bringProducts() {
    let readProducts = fs.readFileSync(productsDir, 'utf-8');
    let products = readProducts.length == 0 ? [] : JSON.parse(readProducts);
    return products;
}

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
        res.render('productAdd', {
            customCss: '/css/productAdd.css',
            tracklist: tracklist,
        });
    },

    createProduct: (req, res) => {

        let track = req.body.track;

        let cd = req.body.precioCD != null ? true : false;
        let dvd = req.body.precioDVD != null ? true : false;
        let vinil = req.body.precioVinilo != null ? true : false;

        let album = {
            id: generateId(),
            title: req.body.title,
            artist: req.body.artist,
            format: req.body.format,
            price: req.body.price,
            frontCover: req.body.frontCover,
            backCover: req.body.backCover,
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
        res.send("Album agregado!");
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
        let products = bringProducts();
        res.render('allProducts', {
            customCss: '/css/homePage.css',
            allProducts: products
        });
    },

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