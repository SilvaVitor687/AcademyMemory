const Users = require('../models/Users')

function users (req,res) {
    res.render('users')
};

async function createUser (req, res) {
    const { name, email } = req.body;
    const createdUser = await Users.create({ name, email });

    return res.json(createdUser);
}

module.exports = {
    users,
    createUser
}