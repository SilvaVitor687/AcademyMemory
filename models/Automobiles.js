const {Model, DataTypes} = require('sequelize');

class Automobiles extends Model {
    static init (sequelize) {
        super.init({
            name: DataTypes.STRING,
            exchange: DataTypes.STRING,
            km: DataTypes.STRING,
            fuel: DataTypes.STRING,
            years: DataTypes.STRING,
            price: DataTypes.STRING,
            url: DataTypes.STRING,
            
        }, {
            sequelize
        })
    };
}

module.exports = Automobiles;