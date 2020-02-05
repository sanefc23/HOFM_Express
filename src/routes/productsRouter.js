// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* GET - Add products. */
router.get('/add', productsController.renderAdd);
router.post('/add', productsController.createProduct);

router.get('/cart', productsController.renderCart);

router.get('/all', productsController.showAll);
// router.get('/all/edit/:id', productsController.renderEdit);
// router.put('/all/edit/:id', productsController.edit);
router.delete('/all/delete/:id', productsController.delete);
router.get('/:id', productsController.renderDetail);


module.exports = router;
