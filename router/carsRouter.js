const express = require('express');
const router = express.Router();


const carsControllers = require('../controllers/carsControllers');

// Passando os métodos GET.
router.get('/', carsControllers.cars);
router.get('/deletar', carsControllers.cars);


module.exports = router;


