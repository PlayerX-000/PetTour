const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

/****************************************************************/

class Trabalhadores extends Model {}

/****************************************************************/

Trabalhadores.init({
    id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
    },
    imgUrl:{
    type: DataTypes.STRING,
    allowNull: false
    },
    status:{
    type: DataTypes.INTEGER,
    allowNull: false
    },
    nome: {
    type: DataTypes.STRING,
    allowNull: false
    },
    valor: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    cidade: {
    type: DataTypes.STRING,
    allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
    type: DataTypes.STRING,
    allowNull: false
    },
    categoria: {
    type: DataTypes.STRING,
    allowNull: true
    },
    contato: {
    type: DataTypes.STRING,
    allowNull: false
    },
   },
    {
    sequelize,
    modelName: 'Trabalhadores'
    })
    
/****************************************************************/

module.exports = Trabalhadores;