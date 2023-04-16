const Automobiles = require('../models/Automobiles')

async function createAuto(req, res){
    const { name, exchange, km , fuel, years, price, url } = req.body;
    const createdAuto = await Automobiles.create({ name, exchange, km , fuel, years, price, url });

    return res.json(createdAuto)

}

async function cars (req, res) {
    const auto = await Automobiles.findAll({
        where: {
            exchange: ['Automático','Manual']
        }
    });
    console.log(auto)
    return res.render('cars', {auto})
}




module.exports = {
    createAuto,
    cars,
    
};