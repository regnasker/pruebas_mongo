const express = require('express');
const router = express.Router();

// Importamos la ruta del controlador
const product_controller = require('../controllers/product.controller');


// ruta test
router.get('/test', product_controller.test);
module.exports = router;