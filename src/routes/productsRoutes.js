const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');

/*====== Controller ======*/
const productsController = require('../controllers/productsController');

// Admin Middleware
const validateAdmin = require('../middlewares/validateAdmin')

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

// Show complete catalog - GET
router.get('/all', validateAdmin, productsController.showAll);

// Show edit-form - GET
router.get('/all/edit/:id', validateAdmin, productsController.renderEdit);

// Update product - PUT
router.put('/all/edit/:id', validateAdmin, upload.any('file'), productsController.update);

// Delete product - DELETE
router.delete('/all/delete/:id', validateAdmin, productsController.destroy);

// Show product detail - GET
router.get('/:id', productsController.renderDetail);


module.exports = router;
