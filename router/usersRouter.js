const express = require('express');
const router = express.Router();


const usersControllers = require('../controllers/usersControllers');

// Passando os métodos GET.
router.get('/', usersControllers.users);
router.post('/create', usersControllers.createUser)
router.get('/list', usersControllers.listUsers)



module.exports = router;


