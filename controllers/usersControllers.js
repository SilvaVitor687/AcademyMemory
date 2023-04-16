const Users = require('../models/Users');

function users (req,res) {
    res.render('users')
};

async function createUser (req, res) {
    const { name, email } = req.body;
    const createdUser = await Users.create({ name, email });

    return res.json(createdUser);
};

async function listUsers (req, res) {
    const users = await Users.findAll();
    return res.json(users)
}

module.exports = {
    users,
    createUser,
    listUsers
}