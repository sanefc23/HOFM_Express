const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiController')

router.get('/products', controller.products);
router.get('/products/:id', controller.productById);
router.get('/users', controller.users)

module.exports = router;
