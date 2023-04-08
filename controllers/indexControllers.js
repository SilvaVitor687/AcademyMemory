const veiculos = require('../config/BD');

const indexControllers = {
    index: (req,res) => {       
       return res.render('index', veiculos)
    }
}

module.exports = indexControllers;
