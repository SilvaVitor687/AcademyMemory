// Importar o Sequelize, nesse caso é importante deixar em letra maiscula pois é uma Classe.
const Sequelize = require('sequelize');
const Users = require('../models/Users')
const Auto = require('../models/Automobiles')

//Importar as configurações
const databaseConfigurations = require('../config/database')

//Criar conexões
const connection = new Sequelize(databaseConfigurations);
Users.init(connection);
Auto.init(connection);

//Exportar a Conexão
module.exports = connection;