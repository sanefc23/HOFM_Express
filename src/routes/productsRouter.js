const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');

/*====== Controller ======*/ 
const productsController = require('../controllers/productsController');

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

// Show create-form
router.get('/add', productsController.renderAdd);

// Store product
router.post('/add', upload.any(), productsController.store);
router.get('/cart', productsController.renderCart);

// Show complete catalog
router.get('/all', productsController.showAll);

// router.get('/all/edit/:id', productsController.renderEdit);
// router.put('/all/edit/:id', productsController.edit);

// Delete product
router.delete('/all/delete/:id', productsController.delete);

// Show product detail
router.get('/:id', productsController.renderDetail);


module.exports = router;
