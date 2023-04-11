//const veiculos = require('../config/BD');
const Users = require('../models/Users')

const indexControllers = {
    index: (req,res) => {       
       return (
        res.render('index'),

        async function createUser (req, res) {
            const {name, email} = req.body;
            const createdUser = await Users.create({ name, email });
            return res.json(createdUser)
        }
        
    )},

    
}

module.exports = indexControllers;
