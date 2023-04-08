const express =  require('express');
const router = express.Router();

//Import das rotas
const motorsControllers = require('../controllers/motorsControllers');


// Passando os métodos GET.
router.get('/', motorsControllers.motors);


module.exports = router;