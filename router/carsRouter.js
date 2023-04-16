const express = require('express');
const router = express.Router();


const carsControllers = require('../controllers/carsControllers');

// Passando os métodos GET.
router.get('/', carsControllers.cars);
router.post('/create-cars', carsControllers.createAuto);
//router.get('/list', carsControllers.listAuto);


module.exports = router;


