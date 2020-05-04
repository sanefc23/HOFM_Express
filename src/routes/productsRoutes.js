const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');


const productsController = require('../controllers/productsController'); // Controller 
const validateAdmin = require('../middlewares/validateAdmin'); // Admin Middleware
const cart = require('../middlewares/cartMiddleware'); // Cart Cookie Middleware
const clearCart = require('../middlewares/clearCartMiddleware'); // Clear Cart Middleware

// Multer implementation
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/albums')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage
});

// Show create-form - GET
router.get('/add', validateAdmin, productsController.renderAdd);

// Store product - POST
router.post('/add', validateAdmin, upload.any('file'), productsController.store);

// Show cart - GET
router.get('/cart', productsController.renderCart);
// router.post

// Show search results
router.get('/results', productsController.renderSearch);

// Show complete catalog - GET
router.get('/all', validateAdmin, productsController.showAll);

// Show edit-form - GET
router.get('/all/edit/:id', validateAdmin, productsController.renderEdit);

// Update product - PUT
router.put('/all/edit/:id', validateAdmin, upload.any('file'), productsController.update);

// Delete product - DELETE
router.delete('/all/delete/:id', validateAdmin, productsController.destroy);

// Show product detail - GET
router.get('/:id', cart, productsController.renderDetail);

// Show product detail - POST
router.post('/:id', cart, productsController.addToCartDetail);


module.exports = router;
