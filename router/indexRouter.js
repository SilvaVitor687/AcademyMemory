const express =  require('express');
const router = express.Router();

//Import das rotas
const indexControllers = require('../controllers/indexControllers');


// Passando os métodos GET.
router.get('/', indexControllers.users);


module.exports = router;