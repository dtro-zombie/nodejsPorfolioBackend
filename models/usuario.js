const Sequelize = require("sequelize");
const sequelize = require("../database/database");



const {DataTypes}=require('sequelize')


const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
        // validate: {
        //     isEmail: true
        // },
        allowNull: false
   
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('now')
  }
}, 
{
  timestamps: false
});





module.exports = Usuario;
