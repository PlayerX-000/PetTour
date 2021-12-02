const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

/****************************************************************/

class User extends Model {}

/****************************************************************/

User.init({
    id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER, 
    allowNull: false
    },
    imgUrl: {
    type: DataTypes.STRING,
    allowNull: false
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    sobrenome: {
    type: DataTypes.STRING,
    allowNull: false
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false
    },
    senha: {
    type: DataTypes.STRING,
    allowNull: false
    },
    usuario: {
    type: DataTypes.STRING,
    allowNull: false
    },
    cep: {
    type: DataTypes.STRING,
    allowNull: false
    },
    estado: {
    type: DataTypes.STRING,
    allowNull: false
    },
    cidade: {
    type: DataTypes.STRING,
    allowNull: false
    },
    rua: {
    type: DataTypes.STRING,
    allowNull: false
    },
    bairro: {
    type: DataTypes.STRING,
    allowNull: false
    }},
    {
    sequelize,
    modelName: 'Users'
    })
    
/****************************************************************/

module.exports = User;