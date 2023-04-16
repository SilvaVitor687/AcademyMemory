//const veiculos = require('../config/BD');
const Automobiles = require('../models/Automobiles')


async function users(req,res) {
    const auto = await Automobiles.findAll({
        where: {
            id: [1,10,17,5]
        }
    });
    //console.log(list) 
    return res.render('index', {auto})
}



module.exports = {
    users
};
