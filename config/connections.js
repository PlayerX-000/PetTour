const { Sequelize } = require("sequelize");

/****************************************************************/

const sequelize = new Sequelize("tccapp" , "grupo1" , "etec2021" ,{
dialect: 'sqlite',
host: './database/tccapp.sqlite'
})

/****************************************************************/

module.exports = sequelize;