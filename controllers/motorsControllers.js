const Automobiles = require('../models/Automobiles')

const motorsControllers = {
    motors: async (req, res) => {
        const auto = await Automobiles.findAll({
            where: {
                exchange: ''
            }
        })
        console.log(auto)
        res.render('motors', {auto} )
        /*const {id} = req.params;

        console.log(id)*/
    }
}

module.exports = motorsControllers;