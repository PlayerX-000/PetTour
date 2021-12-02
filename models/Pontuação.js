const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

/****************************************************************/

class Pontuacoes extends Model {}

/****************************************************************/

Pontuacoes.init({
    id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
    },
    emailuser: {
    type: DataTypes.STRING,
    allowNull: false
    },
    emailclient: {
    type: DataTypes.STRING,
    allowNull: false
    },
    nota: {
    type: DataTypes.STRING,
    allowNull: false
    }},
    {
    sequelize,
    modelName: 'Pontuacoes'
    })
    
/****************************************************************/

module.exports = Pontuacoes;