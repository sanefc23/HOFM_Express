// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/albums')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

/* GET - Add products. */
router.get('/add', productsController.renderAdd);
router.post('/add', upload.any(), productsController.createProduct);

router.get('/cart', productsController.renderCart);

router.get('/all', productsController.showAll);
// router.get('/all/edit/:id', productsController.renderEdit);
// router.put('/all/edit/:id', productsController.edit);
router.delete('/all/delete/:id', productsController.delete);
router.get('/:id', productsController.renderDetail);


module.exports = router;
